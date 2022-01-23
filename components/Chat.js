import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import getRecipientEmail from "../utils/getRecipientEmail";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import { useRouter } from "next/router";

const Chat = ({ id, users }) => {
    const router = useRouter();
    const [user] = useAuthState(auth)
    const [recipientSnapshot] = useCollection(db.collection('users').where('email', '==', getRecipientEmail(users, user)))

    const enterChat = () => {
        router.push(`/chat/${id}`)
    }

    const recipient = recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = getRecipientEmail(users, user)

    return (
        <Container onClick={enterChat}>
            {recipient ? (
                <UserAvatar src={recipient?.photoURL} />
            ) : (
                <UserAvatar src={recipientEmail[0]} />
            )}
            <p>{recipientEmail}</p>
        </Container>
    );
};

export default Chat;


const Container = styled.div`
    display:flex;
    align-items;center;
    cursor:pointer;
    padding:15px;
    word-break: break-word;

    :hover{
        background-color: #e9eaeb;
    }
`;

const UserAvatar = styled(Avatar)`
    margin:5px;
    margin-right: 15px;
`;