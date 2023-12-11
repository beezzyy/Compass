'use client';
import Header from '@/app/components/Header';
import SingleEntry from '@/app/components/SingleEntry';
import { formatDate, formatMilitaryTime } from '@/app/helpers/utils/datetimeformat';
import Custom403 from '@/app/pages/403';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { useAuth } from '../../contexts/AuthContext';
import { getWeightJournal } from '../../http/weightJournalAPI';


export default function GetWeightJournal({params: { weightJournal } } : { params: { weightJournal: string } }) {
  const logger = require('../../../logger');
  const { user } = useAuth();
  const router = useRouter();
  const [weight, setweight] = useState<any>(null);
  
  async function fetchWeightJournal() {
    try {
      const result = await getWeightJournal(weightJournal);
      logger.info('Weight journal entry retrieved:', result);
      setweight(result.data);
    } catch (error) {
      logger.error('Error retrieving weight journal entry:', error);
    }
  }


  useEffect(() => {
    if (!user) {
      router.push("/login")
      logger.warn('User not found.')
      alert('User not found.');
    } 
    if (user) {
      setTimeout(() => {
        fetchWeightJournal();
      }, 1000);  
    }
  }, []);

  if (!user) {
    return <div><Custom403/></div>
  }

  return (
    <div className="bg-eggshell min-h-screen flex flex-col">
       <span className="flex items-baseline font-bold text-darkgrey text-[24px] mx-4 mt-4 mb-4">
              <button onClick={() => router.push('/getWeightJournals')}>
              <Header headerText="View the Weight Journal"></Header>
              </button>
              </span>
     
        {weight && (
     <span
     className="rounded-2xl  mt-6 mb-10 mr-28 bg-white flex flex-col m-auto w-full md:max-w-[800px] md:min-h-[600px] p-8 shadow-[0_32px_64px_0_rgba(44,39,56,0.08),0_16px_32px_0_rgba(44,39,56,0.04)]"
   >
    <div className="mt-3 relative">
    <SingleEntry label={ 'Date:' } value={formatDate(weight.date)}></SingleEntry>
    <SingleEntry label={ 'Time:' } value={formatMilitaryTime(weight.time)}></SingleEntry>
    <SingleEntry label={ 'Weight:' } value={weight.weight}></SingleEntry>
    <SingleEntry label={ 'Unit:' } value={weight.unit}></SingleEntry>
    <SingleEntry label={ 'Height:' } value={weight.height}></SingleEntry>
    <SingleEntry label={ 'Notes:' } value={weight.notes}></SingleEntry>         
   </div>
    <div className='mt-10 pb-4 self-center'>
    <Button type="button" text="Edit"style={{ width: '140px' }} onClick={() => router.push(`/getWeightJournals/${weightJournal}/${weightJournal}`)} />
    <Button
    type="button"
    text="Cancel"
    style={{ width: '140px', backgroundColor: 'var(--Red, #FF7171)',marginLeft:'12px' }}
    onClick={() => router.push(`/getWeightJournals`)}
    />
    </div>
      </span>
)}
    </div>
  );
// }
}