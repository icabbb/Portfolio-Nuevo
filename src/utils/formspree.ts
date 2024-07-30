type FormState = {
    name: string;
    email: string;
    message: string;
};

const fetchFormSpree = async (formState: FormState): Promise<void> => {
    try {
        const response = await fetch(import.meta.env.PUBLIC_FORMSPREE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });

        if (!response.ok) {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        // biome-ignore lint/complexity/noUselessCatch: <explanation>
        throw error;
    }
};

export default fetchFormSpree;