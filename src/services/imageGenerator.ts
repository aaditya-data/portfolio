import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'AIzaSyC2NxnbMTXBvU2vWcwZ_Q8wzixA84HfERw' });

// High-quality static fallbacks for specific project types to ensure portfolio looks professional even if API is down
const FALLBACK_IMAGES: Record<string, string> = {
  'Black Friday Analysis': 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1280&h=720',
  'Financial Performance Analysis': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280&h=720',
  'Risk Analytics in Insurance Domain': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1280&h=720',
  'Superstore Marketing Campaign Analysis': 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1280&h=720',
  'UPI Transactions Data Analysis': 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1280&h=720'
};

export async function generateProjectImage(title: string, prompt: string): Promise<string> {
  try {
    // Check if we have a valid API key before attempting generation
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('No API key provided');
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A professional, clean data visualization dashboard for ${prompt}. High resolution, 16:9 aspect ratio, suitable for a data analyst portfolio. No text, just charts and graphs.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error('No image generated');
  } catch (error: any) {
    // Log the error for debugging but don't crash the app
    console.warn(`Image generation failed for "${title}":`, error?.message || error);
    
    // Return a high-quality static fallback if available, otherwise use a seeded placeholder
    return FALLBACK_IMAGES[title] || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1280&h=720&sig=${encodeURIComponent(title)}`;
  }
}
