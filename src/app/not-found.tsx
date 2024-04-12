import Image from 'next/image';
import Button from './components/Button';
import Link from 'next/link';

function NotFound() {
    return (
        <main className="bg-greenBg flex flex-col items-center min-h-screen py-5">
            <div className="w-6/12 bg-lightBg p-[2px] mt-10">
                <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                    <h2 className="text-white ml-3">Error</h2>
                    <Image src='/close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                </div>
                <div className='flex flex-col items-center justify-center py-5'>
                    <div className='flex flex-row gap-x-5 item-center'>
                        <Image src='/warning-icon.png' alt='Not Found Icon' width={60} height={60}/>
                        <p className='text-black text-4xl font-lato italic font-semibold'>404 Page Not Found</p>
                    </div>
                    <p className='text-black mb-5'>This page does not exists.</p>
                    <Button width={150} height={50}><Link href='/'>Go to Homepage</Link></Button>
                </div>
            </div>
        </main>
    );
}

export default NotFound;