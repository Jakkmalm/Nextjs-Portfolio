//src/components/ContactSuccess.tsx
'use client';

export default function ContactSuccess() {
    return (
        <div className="p-6 bg-green-100 border border-green-300 rounded">
            <h3 className="text-green-800 font-semibold mb-2">Tack!</h3>
            <p className="text-green-700">
                Ditt meddelande är skickat. Jag återkommer så fort jag kan!
            </p>
        </div>
    );
}
