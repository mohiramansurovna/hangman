'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useFieldArray, useForm} from 'react-hook-form';
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
import {useEffect, useRef, useState, useTransition} from 'react';
import Link from 'next/link';
import {IoCopyOutline} from 'react-icons/io5';
import {MdDone} from 'react-icons/md';

export default function QuestionForm() {
    const [error, setError] = useState<string>('');
    const [isLoading, startTransition] = useTransition();

    //form
    const form = useForm<z.infer<typeof questionSchema>>({
        resolver: zodResolver(questionSchema),
        defaultValues: {
            questions: [{question: '', answer: ''}],
            asker: '',
        },
    });
    const {fields, append, remove} = useFieldArray({
        control: form.control,
        name: 'questions',
    });

    //sending data
    function onSubmit(values: z.infer<typeof questionSchema>) {
        startTransition(async () => {
            await fetch('/api/question', {
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

    //url
    const [url, setUrl] = useState<string>('');
    const [copied, setCopied] = useState(false);

    async function copyToClipboard() {
        await navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        });
    }

    //example questions
    const [example, setExample] = useState<{question: string; answer: string}[]>([]);
    const exampleRef = useRef<HTMLDivElement>(null);
    const [i, setI] = useState(0);

    async function getExample() {
        await fetch('/api/example').then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    setExample(data);
                });
            } else {
                alert(res.statusText);
            }
        });
    }
    useEffect(() => {
        getExample();
    }, []);
    useEffect(() => {
        if (i == example.length) {
            setI(0);
        }
        setTimeout(() => {
            setI(i + 1);
            setError('');
            if (!exampleRef.current) return;
            exampleRef.current.classList.add('animate-up-in');
            setTimeout(() => {
                if(!exampleRef.current) return;
                exampleRef.current.classList.remove('animate-up-in');
            }, 1000);
        }, 10000);
    }, [i]);

    return url.length == 0 ? (
        <div className='w-full h-full absolute top-0 left-0 flex flex-row justify-around items-center'>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-8 w-1/2 p-12 h-screen bg-[#ffffffbb] dark:bg-[#000000bb]'>
                    <h1 className='text-destructive'>{error}</h1>
                    {fields.map((field,index) => {
                        return (
                            <div
                                key={field.id}
                                className='space-y-4'>
                                <FormField
                                    control={form.control}
                                    name={`questions.${index}.question`}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>
                                                Question {index + 1}{' '}
                                                <Button
                                                    type='button'
                                                    className='border border-dashed bg-transparent border-blue-500 hover:bg-blue-500 *:border-blue-500 hover:*:border-white h-6 rounded-full w-6 p-0'
                                                    onClick={() => {
                                                        remove(index);
                                                    }}>
                                                    <hr className='w-3 border-1' />
                                                </Button>
                                            </FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="What has keys but can't open locks?"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`questions.${index}.answer`}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Answer {index + 1}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder='piano'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        );
                    })}
                    <Button
                        type='button'
                        className='border border-dashed bg-transparent border-blue-500 hover:bg-blue-500 hover:text-white h-6 w-6 p-0 rounded-full text-blue-500 font-semibold text-2xl pb-1'
                        onClick={() => {
                            append({question: '', answer: ''});
                        }}>
                        +
                    </Button>
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
                                    <span className='capitalize text-blue-500'>
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
                        className='border border-dashed bg-transparent border-blue-500 hover:bg-blue-500 hover:text-white w-1/2  text-blue-500 '
                        disabled={isLoading}>
                        Get the link
                    </Button>
                </form>
            </Form>
            {example.length != 0 && (
                <div
                    className='space-y-4 flex flex-col px-5 w-1/2'
                    ref={exampleRef}>
                    <p className='text-xl'>{example[i].question}</p>
                    <p className='text-2xl text-blue-500 mb-5 font-semibold'>
                        "{example[i].answer}"
                    </p>
                    <Button
                        type='button'
                        className='border self-end border-dashed bg-transparent border-blue-500 hover:bg-blue-500 hover:text-white w-1/2  text-blue-500 '
                        onClick={() => {
                            append(example[i]);
                        }}>
                        Use this question
                    </Button>
                </div>
            )}
        </div>
    ) : (
        <div>
            <p className='text-xl'>Your question is created. Here is the link to share it</p>

            <button
                className='w-full min-h-20 my-5 border-2 border-dashed rounded-xl border-blue-900 flex flex-col justify-start gap-4 p-2 items-end cursor-pointer'
                onClick={copyToClipboard}>
                {copied ? (
                    <p className='flex items-center text-sm gap-1'>
                        <MdDone size={15} />
                        Copied!
                    </p>
                ) : (
                    <p className='flex items-center text-sm gap-1'>
                        <IoCopyOutline size={15} />
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
