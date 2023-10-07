'use client';
import Image from 'next/image';
import Button from '../components/Button';
import Input from '../components/Input';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { createWeightJournal } from '../http/weightJournalAPI'; // Replace '../api/yourApiFile' with the correct path
import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';
import { useEffect, useState } from 'react';


export default function CreateWeightJournal() {
  const router = useRouter();
  const { user } = useAuth();
  const { userInfo } = useUser();

  useEffect(() => {
    if (!userInfo) {
      alert('User not found.');
    } 
  }, [userInfo, router]);

  
  const formik = useFormik({
    initialValues: {
      date: '', // Initialize the form fields with empty values
      time: '',
      weight: 0.0,
      height: 0.0,
      unit: '',
      notes: '',
    },

    onSubmit: async (values) => {
      try {
        const userId = user?.uid || '';

        const data = {
          date: values.date,
          time: values.time,
          weight: values.weight,
          height: values.height,
          unit: values.unit,
          notes: values.notes,
        };
        const result = await createWeightJournal(userId, data); 
        console.log('Weight journal entry created:', result);
        router.push('/getWeightJournals');
      } catch (error) {
        console.error('Error creating weight journal entry:', error);
      }
    },
  });


  const [dateError, setDateError] = useState(false);
const [timeError, setTimeError] = useState(false);
const [weightError, setWeightError] = useState(false);
const [heightError, setHeightError] = useState(false);
const [unitError, setUnitError] = useState(false);

const handleSubmit = (error: any) => {
  error.preventDefault();

  // Check if Date is empty
  if (!formik.values.date) {
    setDateError(true);
  } else {
    setDateError(false);
  }

  // Check if Time is empty
  if (!formik.values.time) {
    setTimeError(true);
  } else {
    setTimeError(false);
  }

  // Check if Date is empty
  if (!formik.values.weight) {
    setDateError(true);
  } else {
    setDateError(false);
  }

  // Check if Time is empty
  if (!formik.values.height) {
    setTimeError(true);
  } else {
    setTimeError(false);
  }

// Check if Date is empty
if (!formik.values.date) {
  setDateError(true);
} else {
  setDateError(false);
}

// Check if Time is empty
if (!formik.values.unit) {
  setTimeError(true);
} else {
  setTimeError(false);
}

};

  return (
    <div className="bg-eggshell min-h-screen flex flex-col">
      <span className="flex items-baseline font-bold text-darkgrey text-[24px] mx-4 mt-4 mb-4">
        <Link href="">
          <Image
            src="/icons/LeftArrow.svg"
            alt="LeftArrow icon"
            width={10}
            height={10}
            className="mr-4 md:hidden"
            style={{ width: 'auto', height: 'auto' }}
          />
        </Link>
        Create Weight Journal
      </span>
      <form
      className="rounded-3xl bg-white flex flex-col m-auto w-full md:max-w-[800px] md:min-h-[550px] p-8 shadow-[0_32px_64px_0_rgba(44,39,56,0.08),0_16px_32px_0_rgba(44,39,56,0.04)]"
      onSubmit={formik.handleSubmit}
    >
      <div className="mt-3 mb-3">
        <label
          htmlFor="date"
          className="font-sans font-medium text-grey text-[16px]"
        >
          Date
        </label>
        <br />
        <Input 
    name="date"
    id="date"
    type="date"
    style={{ width: '100%' }}
    onChange={formik.handleChange}
    value={formik.values.date}
    onBlur={formik.handleBlur}
    required={true} 
    />
{formik.touched.date && !formik.values.date && (
        <p className="text-red text-[14px]">This field can't be left empty.</p>
      )}      </div>

      <div className="mt-3">
        <label
          htmlFor="time"
          className="font-sans font-medium text-grey text-[16px]"
        >
          Time
        </label>
        <br />
        <Input
    name="time"
    id="time"
    type="time"
    style={{ width: '100%' }}
    onChange={formik.handleChange}
    value={formik.values.time}
    onBlur={formik.handleBlur}
  />
{formik.touched.time && !formik.values.time && (
        <p className="text-red text-[14px]">This field can't be left empty.</p>
      )}      
      </div>

      <div className="mt-3">
        <label
          htmlFor="weight"
          className="font-sans font-medium text-grey text-[16px]"
        >
          Weight
        </label>
        <br />
        <Input
          name="weight"
          id="weight"
          type="number"
          style={{ width: '100%' }}
          onChange={formik.handleChange}
          value={formik.values.weight.toString()}
          onBlur={formik.handleBlur}
        />
         {/* Check if the field is touched */}
  {formik.touched.weight && (
    // Check if the field is empty
    !formik.values.weight && (
      <p className="text-red text-[14px]">This field can't be left empty or zero.</p>
    ) || (
      // Check if the field is less than or equal to zero
      formik.values.weight <= 0 && (
        <p className="text-red text-[14px]">You can't enter a negative weight or a weight of zero.</p>
      )
    )
  )}
      </div>

      <div className="mt-3">
        <label
          htmlFor="height"
          className="font-sans font-medium text-grey text-[16px]"
        >
          Height
        </label>
        <br />
        <Input
          name="height"
          id="height"
          type="number"
          style={{ width: '100%' }}
          onChange={formik.handleChange}
          value={formik.values.height.toString()}
          onBlur={formik.handleBlur}
        />
        

       {/* Check if the field is touched */}
  {formik.touched.height && (
    // Check if the field is empty
    !formik.values.height && (
      <p className="text-red text-[14px]">This field can't be left empty or zero.</p>
    ) || (
      // Check if the field is less than or equal to zero
      formik.values.height <= 0 && (
        <p className="text-red text-[14px]">You can't enter a negative weight or a weight of zero.</p>
      )
    )
  )}
      
      </div>

      <div className="mt-3">
        <label
          htmlFor="unit"
          className="font-sans font-medium text-grey text-[16px]"
        >
          Unit
        </label>
        <br />
        <select
          name="unit"
          id="unit"
          style={{ width: '100%' }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.unit}
        >
          <option value="kg">kg</option>
          <option value="lb">lb</option>
        </select>
        {unitError && <p className="text-red text-[14px]">This field can't be left empty.</p>}

        {formik.touched.unit && !formik.values.unit && (
          <p className="text-red text-[14px]">This field can't be left empty.</p>
        )}
      </div>

      <div className="mt-3">
                <label
                  htmlFor="notes"
                  className="font-sans font-medium text-grey text-[16px]"
                >
                  Notes
                </label>
                <br />
                <Input
                  name="notes"
                  id="notes"
                  type="text"
                  style={{ width: '100%' }}
                  onChange={formik.handleChange}
                  value={formik.values.notes}
                  onBlur={formik.handleBlur}
                />
              </div>
      
      <div className="mx-auto space-x-2">
        <Button
          type="button"
          text="Cancel"
          style={{ width: '140px', backgroundColor: 'var(--Red, #FF7171)' }}
          onClick={() => router.push("/profile")}
        />

<Button
          type="submit"
          text="Submit"
          disabled={
            !(formik.isValid && formik.dirty) || // Check if the form is valid and dirty
            formik.values.weight === 0 || // Check if weight is zero
            formik.values.weight < 0 || // Check if weight is less than  zero
            formik.values.height === 0 || // Check if height is zero
            formik.values.height < 0 || // Check if height is less than zero
            !formik.values.unit || // Check if unit is missing or empty
            !formik.values.date || // Check if date is missing or empty
            !formik.values.time || // Check if time is missing or empty
            !formik.values.weight || // Check if weight is missing or empty
            !formik.values.height // Check if height is missing or empty
          }
          style={{ width: '140px' }}
        />
      </div>
    </form>
    </div>
  );






}