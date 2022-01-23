import { useEffect } from 'react';
import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import Login from '../components/Login'
import Loading from '../components/Loading';
import firebase from 'firebase/compat/app';

import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: user.photoURL,
      }, { merge: true })
    }

    // if (!user) return router.push('/login', undefined, { shallow: true })

    // if (user) return router.push('/', undefined, { shallow: true })
  }, [user])

  if (loading) return <Loading />
  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
