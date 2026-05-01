'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Section } from '@/components/ui';

export default function ContactPage() {
  const [state, handleSubmit] = useForm('xqenakpa');
  const [submittedEmail, setSubmittedEmail] = useState('your email');

  if (state.succeeded) {
    return (
      <main>
        <Section title="">
          <div className='glass rounded-2xl p-6 w-full border border-green-400/30 bg-green-500/10 text-green-100'>
            We got it. Expect a response within 24 hours at {submittedEmail}.
          </div>
        </Section>
      </main>
    );
  }

  return (
    <main>
      <Section>
        <div className='max-w-2xl'>
          <h1 className='text-4xl md:text-5xl font-black'>Let&apos;s build something.</h1>
          <p className='text-white/70 mt-4'>Tell us about your gym and we&apos;ll put together a free homepage mockup.</p>
          <div className='mt-5 flex flex-wrap gap-3 text-sm'>
            <span className='glass rounded-full px-4 py-2 text-white/80'>Free mockup, no commitment</span>
            <span className='glass rounded-full px-4 py-2 text-white/80'>Response within 24 hours</span>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            const form = e.currentTarget;
            const emailValue = (new FormData(form).get('email') as string) || 'your email';
            setSubmittedEmail(emailValue);
            handleSubmit(e);
          }}
          className='grid gap-4 mt-8 max-w-2xl'
        >
          <div>
            <label htmlFor='name' className='text-white/60 text-sm mb-1 block'>Name</label>
            <input id='name' name='name' required className='glass p-4 rounded-xl w-full' />
            <ValidationError prefix='Name' field='name' errors={state.errors} />
          </div>

          <div>
            <label htmlFor='business' className='text-white/60 text-sm mb-1 block'>Business name</label>
            <input id='business' name='business' required className='glass p-4 rounded-xl w-full' />
            <ValidationError prefix='Business name' field='business' errors={state.errors} />
          </div>

          <div>
            <label htmlFor='email' className='text-white/60 text-sm mb-1 block'>Email</label>
            <input id='email' type='email' name='email' required className='glass p-4 rounded-xl w-full' />
            <ValidationError prefix='Email' field='email' errors={state.errors} />
          </div>

          <div>
            <label htmlFor='website' className='text-white/60 text-sm mb-1 block'>Current website URL</label>
            <input id='website' name='website' placeholder="Leave blank if you don't have one" className='glass p-4 rounded-xl w-full' />
          </div>

          <div>
            <label htmlFor='message' className='text-white/60 text-sm mb-1 block'>What are you looking for?</label>
            <textarea id='message' name='message' required className='glass p-4 rounded-xl w-full min-h-36' />
            <ValidationError prefix='Message' field='message' errors={state.errors} />
          </div>

          <button type='submit' disabled={state.submitting} className='w-full bg-accent rounded-xl py-4 font-semibold text-black'>
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </Section>
    </main>
  );
}
