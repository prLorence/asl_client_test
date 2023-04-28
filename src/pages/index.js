import Head from 'next/head'
import { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { FormControl, Input, Button, useForkRef } from '@mui/material';
import TestUpload from './test-upload';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <TestUpload/>
  )
}
