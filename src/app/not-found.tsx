"use client";
import React from 'react'
import css from "@/styles/not-found.module.css";
import Text from '@/ui/text/text';
import Button from '@/ui/button/button';
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const NotFound = (): React.JSX.Element => {
  const router = useRouter();

  return (
    <div className={css.container}>
      <Text as='p'>صفحه ای که دنبالش بودید ، پیدا نشد.</Text>
      <Button bg='transparent' textColor='var(--text-base-600)' fontSize='16px' onClick={() => router.back()}>
          <FaArrowRightLong className={css["arrow-right-icon"]}/>
          برگشت
      </Button>
    </div>
  )
}

export default NotFound