import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import corpcommentImg from '@/public/corpcomment.png'
import rmtdevImg from '@/public/rmtdev.png'
import wordanalyticsImg from '@/public/wordanalytics.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Hutech University',
    location: 'Ho Chi Minh',
    description:
      'I graduated after 4 years of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2018',
  },
  {
    title: 'Front-End Developer',
    location: 'Ho Chi Minh',
    description: 'I worked as a part-time front-end developer for 1 years.',
    icon: React.createElement(CgWorkAlt),
    date: '2021 - 2022',
  },
  {
    title: 'Front-End Developer',
    location: 'Ho Chi Minh',
    description:
      "I'm front-end developer working. My stack includes React, Next.js, TypeScript, Redux-saga, .... I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2022 - present',
  },
] as const

export const projectsData = [
  {
    title: 'MovieOfMe',
    description: 'I worked as a full-stack developer for 1 months. ',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'Akademi Dashboard',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'CRM Dashboard',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'Prisma', 'Ant', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
  {
    title: 'The New Gym Dashboard',
    description: 'The New Gym',
    tags: ['React'],
    imageUrl: wordanalyticsImg,
  },
  {
    title: '',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'Prisma', 'Ant', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Apollo',
  'Express',
  'Framer Motion',
] as const
