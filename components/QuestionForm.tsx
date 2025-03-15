'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {set, z} from 'zod';

import {Button} from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {questionSchema} from '@/zodSchemas';
import {useState, useTransition} from 'react';
import Link from 'next/link';
import {IoCopyOutline} from 'react-icons/io5';
import {MdDone} from 'react-icons/md';
export default function QuestionForm() {
    const [url, setUrl] = useState<string>('');
    const [isLoading, startTransition] = useTransition();
    const [copied, setCopied] = useState(false);
    const form = useForm<z.infer<typeof questionSchema>>({
        resolver: zodResolver(questionSchema),
        defaultValues: {
            question: '',
            asker: '',
            answer: '',
        },
    });

    function onSubmit(values: z.infer<typeof questionSchema>) {
        startTransition(async () => {
            await fetch('/api/question/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            }).then((res) => {
                if (res.ok) {
                    let base = window.location.origin;
                    res.json().then((id) => setUrl(`${base}/answerboard/${id}`));
                } else {
                    alert(res.statusText);
                }
            });
        });
    }
    async function copyToClipboard() {
        await navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false)}, 1000);
        });
    }
    return url.length == 0 ? (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'>
                <FormField
                    control={form.control}
                    name='question'
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Question</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="What has keys but can't open locks?"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>Write your question here</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='answer'
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Answer</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='piano'
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Write the answer of this question here.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='asker'
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Your name (or nickname)</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='mira'
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                We will show it as '
                                <span className='capitalize'>
                                    {form.getValues('asker') == ''
                                        ? 'mira'
                                        : form.getValues('asker')}
                                </span>{' '}
                                asks...'
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type='submit'
                    disabled={isLoading}>
                    Get the link
                </Button>
            </form>
        </Form>
    ) : (
        <div>
            <p className='text-xl'>Your question is created. Here is the link to share it</p>

            <button
                className='w-full min-h-20 my-5 border-2 border-dashed rounded-xl border-blue-900 flex flex-col justify-start gap-4 p-2 items-end cursor-pointer'
                onClick={copyToClipboard}>
                {copied ? (
                    <p className='flex items-center text-sm gap-1'>
                        <MdDone size={15}/>
                        Copied!
                    </p>
                ) : (
                    <p className='flex items-center text-sm gap-1'>
                        <IoCopyOutline size={15}/>
                        Copy
                    </p>
                )}

                <Link
                    href={url}
                    className='w-full text-blue-900 mb-8'>
                    {url}
                </Link>
            </button>
        </div>
    );
}
