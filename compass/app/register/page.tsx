'use client';
import {useState} from 'react';
import { useFormik } from 'formik';
import Image from 'next/image';
import Button from '../components/Button';
import Input from '../components/Input';
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter();

    const formik = useFormik({
        initialValues : {
            email:'',
            password: '',
            confPassword:'',
            fname:'',
            lname:'',
            street:'',
            city:'',
            province:'',
            postalCode:'',
            healthCard:'',
            phone:'',
            birthdate:'',
            expiration:'',
            doctor:'',
            sex:''
        },
        onSubmit : values => {
            router.push('/');
        },
        validate : values => {
            let errors : {
                email?: string;
                password? : string;
                confPassword? : string;
                fname? : string;
                lname? : string;
                expiration?: string;
                doctor? : string;
                healthCard?: string;
                phone?: string;
                postalCode?: string;
                city?: string;
                province?: string;
                birthdate?: string;
                street?: string;
                sex?:string;
            } ={};

            if(!values.email){
                errors.email = "Email Required";
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email = "Invalid email format"
            } 
            if(!values.password){
                errors.password = "Password Required";
            }
            if(!values.confPassword){
                errors.confPassword = "Confirmation of Password Required";
            }
            if(!(values.confPassword.localeCompare(values.password)===0)){
                errors.confPassword="Passwords provided must match"
            }
            if(!values.fname){
                errors.fname="First Name Required";
            }
            if(!values.lname){
                errors.lname="Last Name Required";
            }
            if(!values.street){
                errors.street="Street Required";
            }
            if(!values.city){
                errors.city="City Required";
            }
            if(!values.province){
                errors.province="Province Required";
            }
            if(!values.postalCode){
                errors.postalCode="Postal Code Required";
            } else if(!/[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]$/i.test(values.postalCode)){
                errors.postalCode="Invalid Postal Code";
            }
            if(!values.healthCard){
                errors.healthCard="Health Insurance Card Number Required";
            } else if(!/[A-Z]{4}[0-9]{8}$/i.test(values.healthCard)){
                errors.healthCard="Invalid Health Insurance Card Number";
            }

            if(!values.phone){
                errors.phone="Phone Number Required";
            } else if(!/[0-9]{10}/i.test(values.phone)){
                errors.phone="Please enter a 10 digit number"
            }
              
            if(!values.birthdate){
                errors.birthdate="Birthdate Required";
            }

            if(!values.expiration){
                errors.expiration="Expiration Date Required";
            }
            if(!values.doctor){
                errors.doctor="Name of Practitioner Required";
            }
            if(!values.sex){
                errors.sex="Sex Required";
            }
        
            return errors;
        }
    })

    const [count, setCount] = useState(0);
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState<boolean>(false);

    const handleNext = () => {
        setCount(previous => previous + 1);
    }
   
    const handlePasswordVisibility = (e:React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        e.preventDefault();
        setPasswordVisibility(previous => !previous)
    }

    const handleConfirmPasswordVisibility = (e:React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        e.preventDefault();
        setConfirmPasswordVisibility(previous => !previous)
    }

  return (
    <div className="bg-eggshell min-h-screen flex flex-col">
         
        <span className="flex items-baseline font-bold md:font-normal text-darkgrey text-[24px] mx-4 xl:hidden">
        <Link href="">
          <Image
            src="/icons/leftArrow.svg"
            alt="LeftArrow icon"
            width={10}
            height={10}
            className="mr-4 md:hidden"
            style={{ width: 'auto', height: 'auto'}}
          />
        </Link>
            Registration
            </span>
        <form className="rounded-3xl bg-white flex flex-col m-auto w-full md:max-w-[800px] md:min-h-[600px] p-8 shadow-[0_32px_64px_0_rgba(44,39,56,0.08),0_16px_32px_0_rgba(44,39,56,0.04)]" onSubmit={formik.handleSubmit}>

        <div className="flex mx-auto space-x-2">
                { count==0 ? <div className="rounded-[50%] bg-lightgrey h-[10px] w-[10px]" id="firstDot"></div> 
                    : 
                 <div className="rounded-[50%] bg-slateblue h-[10px] w-[10px]" id="firstDot" onClick={() => {setCount(0)}}></div>
                 }

                 { count==1 ? <div className="rounded-[50%] bg-lightgrey h-[10px] w-[10px]" id="secondDot"></div> 
                    : 
                 <div className="rounded-[50%] bg-slateblue h-[10px] w-[10px]" id="secondDot" onClick={() => {setCount(1)}}></div>
                 }

                { count==2 ? <div className="rounded-[50%] bg-lightgrey h-[10px] w-[10px]" id="thirdDot"></div> 
                    : 
                 <div className="rounded-[50%] bg-slateblue h-[10px] w-[10px]" id="thirdDot" onClick={() => {setCount(2)}}></div>
                }
        </div>

        {count===0 &&
                <>
                    <div className="mt-3">
                        <label htmlFor='email' className="font-sans font-medium text-grey text-[16px]">Email Address</label>
                        <br/>
                        <Input name="email" id="email" type="text" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                        {formik.touched.email && formik.errors.email && <p className="text-[16px] text-red font-sans">{formik.errors.email}</p>}
                    </div>
                    <div className="mt-3 relative">
                        <label htmlFor='password' className="font-sans font-medium text-grey text-[16px]">Password</label>
                        <br/>
                        <Input name="password" id="password" type={passwordVisibility ? "text":"password"} style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
                        <div className="absolute right-2 bottom-3" onClick={handlePasswordVisibility}>
                            {passwordVisibility? <Image
                                    src="/icons/visibleEye.svg"
                                    alt="Eye icon"
                                    width={24}
                                    height={24}
                                    /> : <Image
                                    src="/icons/invisibleEye.svg"
                                    alt="Eye icon"
                                    width={24}
                                    height={24}
                                    style={{ width: 'auto', height: 'auto'}}
                                    />}
                        </div>
                    </div>
                        {formik.touched.password && formik.errors.password && <p className="text-[16px] text-red font-sans">{formik.errors.password}</p>}
                    
                    <div className="mt-3 relative">
                        <label htmlFor='confPassword' className="font-sans font-medium text-grey text-[16px]">Confirm Password</label>
                        <br/>
                        <Input name="confPassword" id="confPassword" type={confirmPasswordVisibility ? "text":"password"} style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.confPassword} onBlur={formik.handleBlur}/>
                        <div className="absolute right-2 bottom-3" onClick={handleConfirmPasswordVisibility}>
                            {confirmPasswordVisibility? <Image
                                    src="/icons/visibleEye.svg"
                                    alt="Eye icon"
                                    width={24}
                                    height={24}
                                    /> : <Image
                                    src="/icons/invisibleEye.svg"
                                    alt="Eye icon"
                                    width={24}
                                    height={24}
                                    style={{ width: 'auto', height: 'auto'}}
                                    />}
                        </div>
                    </div>
                        { formik.touched.confPassword && formik.errors.confPassword &&  <p className="text-[16px] text-red font-sans">{formik.errors.confPassword}</p>}
                    
                    <div className="mt-3">
                        <label htmlFor='fname' className="font-sans font-medium text-grey text-[16px]">First Name</label>
                        <br/>
                        <Input name="fname" id="fname" type="text" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.fname} onBlur={formik.handleBlur}/>
                        {formik.touched.fname && formik.errors.fname && <p className="text-[16px] text-red font-sans">{formik.errors.fname}</p>}
                    </div>
                    <div className="mt-3 mb-3">
                        <label htmlFor='lname' className="font-sans font-medium text-grey text-[16px]">Last Name</label>
                        <br/>
                        <Input name="lname" id="lname" type="text" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.lname} onBlur={formik.handleBlur}/>
                        {formik.touched.lname && formik.errors.lname && <p className="text-[16px] text-red font-sans">{formik.errors.lname}</p>}
                    </div>
                    
                </>
        }

        {count===1 &&
                <>
                    
                    <div className="mt-3">
                        <label htmlFor='street' className="font-sans font-medium text-grey text-[16px]">Street Address</label>
                        <br/>
                        <Input name="street" id="street" type="text" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.street} onBlur={formik.handleBlur}/>
                        {formik.touched.street && formik.errors.street && <p className="text-[16px] text-red font-sans">{formik.errors.street}</p>}
                    </div>
                    <div className="mt-3">
                        <label htmlFor='city' className="font-sans font-medium text-grey text-[16px]">City</label>
                        <br/>
                        <Input name="city" id="city" type="text" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.city} onBlur={formik.handleBlur}/>
                        {formik.touched.city && formik.errors.city && <p className="text-[16px] text-red font-sans">{formik.errors.city}</p>}
                    </div>
                    <div className="mt-3">
                        <label htmlFor='province' className="font-sans font-medium text-grey text-[16px]">Province</label>
                        <br/>
                        <Input name="province" id="province" type="text" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.province} onBlur={formik.handleBlur}/>
                        {formik.touched.province && formik.errors.province &&  <p className="text-[16px] text-red font-sans">{formik.errors.province}</p>}
                    </div>
                    <div className="mt-3">
                        <label htmlFor='postalCode' className="font-sans font-medium text-grey text-[16px]">Postal Code</label>
                        <br/>
                        <Input name="postalCode" id="postalCode" type="text" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.postalCode} onBlur={formik.handleBlur}/>
                        {formik.touched.postalCode && formik.errors.postalCode &&  <p className="text-[16px] text-red font-sans">{formik.errors.postalCode}</p>}
                    </div>
                    <div className="mt-3 mb-3">
                        <label htmlFor='phone' className="font-sans font-medium text-grey text-[16px]">Phone Number</label>
                        <br/>
                        <Input name="phone" id="phone" type="text" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur}/>
                        {formik.touched.phone && formik.errors.phone &&  <p className="text-[16px] text-red font-sans">{formik.errors.phone}</p>}
                    </div>
                </>
               }

        {count===2 &&
                <>
                    <div className="mt-3">
                        <label htmlFor='healthCard' className="font-sans font-medium text-grey text-[16px]">Health Insurance Card Number</label>
                        <br/>
                        <Input name="healthCard" id="healthCard" type="text" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.healthCard} onBlur={formik.handleBlur}/>
                        {formik.touched.healthCard && formik.errors.healthCard &&  <p className="text-[16px] text-red font-sans">{formik.errors.healthCard}</p>}
                    </div>
                    <div className="mt-3">
                        <label htmlFor='expiration' className="font-sans font-medium text-grey text-[16px]">Health Insurance Card Expiration Date</label>
                        <br/>
                        <Input name="expiration" id="expiration" type="date" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.expiration} onBlur={formik.handleBlur}/>
                        {formik.touched.expiration && formik.errors.expiration &&  <p className="text-[16px] text-red font-sans">{formik.errors.expiration}</p>}
                    </div>
                    
                    <div className="mt-3">
                        <label htmlFor='birthdate' className="font-sans font-medium text-grey text-[16px]">Birthdate</label>
                        <br/>
                        <Input name="birthdate" id="birthdate" type="date" style={{ width: '100%',   }} onChange={formik.handleChange} value={formik.values.birthdate} onBlur={formik.handleBlur}/>
                        {formik.touched.birthdate && formik.errors.birthdate &&  <p className="text-[16px] text-red font-sans">{formik.errors.birthdate}</p>}
                    </div>
                    <div className="mt-3 relative">
                        <label htmlFor='sex' className="font-sans font-medium text-grey text-[16px]">Sex</label>
                        <br/>
                        <select name="sex" id="sex" onChange={formik.handleChange} value={formik.values.sex} onBlur={formik.handleBlur} 
                        className="p-2 w-full h-[52px] border border-solid border-lightgrey rounded-md text-grey focus:outline-blue shadow-[0_4px_8px_0_rgba(44,39,56,0.04)]">
                            <option value="">Choose here</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                        
                        {formik.touched.sex && formik.errors.sex && <p className="text-[16px] text-red font-sans">{formik.errors.sex}</p>}
                    
                    <div className="mt-3 mb-3">
                        <label htmlFor='doctor' className="font-sans font-medium text-grey text-[16px]">General Practitioner</label>
                        <br/>
                        <Input name="doctor" id="doctor" type="text" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.doctor} onBlur={formik.handleBlur}/>
                        {formik.touched.doctor && formik.errors.doctor && <p className="text-[16px] text-red font-sans">{formik.errors.doctor}</p>}

                    </div>
                </>
               }  

                { (count == 0 || count == 1) && <div className="md:mt-auto mt-6 mx-auto"><Button type="button" text="Next" style={{ width: '180px' }} onClick={handleNext}/></div>}
                {   count ==2 && 
                    <div className="md:mt-auto mt-6 mx-auto">
                        { (formik.errors.email || formik.errors.password || formik.errors.confPassword || formik.errors.fname || 
                                formik.errors.lname || formik.errors.street || formik.errors.city ||
                                formik.errors.province || formik.errors.postalCode || formik.errors.healthCard || formik.errors.phone
                                || formik.errors.birthdate || formik.errors.expiration || formik.errors.doctor || formik.errors.sex) ?
                            <Button type="submit" text="Finish" style={{width: '180px', cursor: 'not-allowed'}}/>
                            :
                            <Button type="submit" text="Finish" style={{width: '180px'}}/>
                        }
                    </div>}
      </form>
    </div>
  )
}
