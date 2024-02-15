'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// components
import { Google } from '@/app/components/ProviderButtons';

// helpers
import { getURL } from '@/lib/helpers';

export function Providers() {
    async function handleSignInWithGoogle() {
        const supabase = createClientComponentClient();
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${getURL() + '/api/auth/callback'}`
            }
        });
    }

    return (
        <div>
            <div className="relative mt-10">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">Or continue with</span>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
                <Google handleClick={handleSignInWithGoogle} />
            </div>
        </div>
    );
}
