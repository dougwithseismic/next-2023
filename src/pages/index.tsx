import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Default Title</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container'>
        <h1>Next 2023.</h1>
        <h2>Modern React for Modern Developers.</h2>
        <ul className='flex gap-4 my-4'>
          <ListItem link='https://nextjs.org' text='Next.js' />
          <ListItem link='https://www.typescriptlang.org/' text='TypeScript' />
          <ListItem link='https://reactjs.org/docs/hooks-intro.html' text='React Hooks' />
          <ListItem link='https://tailwindcss.com/' text='Tailwind CSS' />
          <ListItem link='https://framer.com/motion' text='Framer Motion' />
        </ul>
        <div className='row'>
          <h3>Tailwind Component Library</h3>
          <div className='flex gap-2'>
            <button className='btn-primary'>Mixable tailwind & CSS Components</button>
            <button className='btn-outline'>For Readable JSX</button>
          </div>
          <p className='my-4'>
            Change <code>@styles/globals.scss</code> to edit the look and feel of these buttons
            with tailwind and scss combined.
          </p>
        </div>
      </div>
    </div>
  )
}

const ListItem = ({ link, text }: { link: string; text: string }) => {
  return (
    <li>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        {text}
      </a>
    </li>
  )
}

export default Home
