'use client';

import { useState, useRef, type ChangeEvent, type FormEvent } from 'react';
import Image from 'next/image';
import { getAiTreatmentSuggestions, type AiTreatmentSuggestionsOutput } from '@/ai/flows/ai-treatment-suggestions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Upload, Wand2, AlertTriangle, Loader2 } from 'lucide-react';

const AiStylist = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<AiTreatmentSuggestionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setSuggestions(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!preview) {
      setError('Please upload a photo first.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setSuggestions(null);

    try {
      const result = await getAiTreatmentSuggestions({ photoDataUri: preview });
      setSuggestions(result);
    } catch (e) {
      console.error(e);
      setError('An error occurred while getting suggestions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="container max-w-4xl">
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Wand2 className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-4xl mt-4">AI Beauty Stylist</CardTitle>
            <CardDescription className="max-w-xl mx-auto">
              Not sure what you need? Upload a photo of yourself, and our AI will
              suggest personalized beauty treatments for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center">
                <Button type="button" variant="outline" size="lg" onClick={() => fileInputRef.current?.click()}>
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Your Photo
                </Button>
                <Input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>

              {preview && (
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src={preview}
                    alt="User preview"
                    width={200}
                    height={200}
                    className="rounded-lg object-cover border-4 border-primary/20"
                  />
                  <Button type="submit" disabled={isLoading} size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Get Suggestions'
                    )}
                  </Button>
                </div>
              )}
            </form>

            {error && (
              <Alert variant="destructive" className="mt-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {suggestions && suggestions.suggestions.length > 0 && (
              <div className="mt-8">
                <h3 className="text-center font-headline text-2xl font-bold">Your Personalized Suggestions</h3>
                <Accordion type="single" collapsible className="w-full mt-4">
                  {suggestions.suggestions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="font-headline text-lg">{item.treatment}</AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">{item.reason}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AiStylist;
