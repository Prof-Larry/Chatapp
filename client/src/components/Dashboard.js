import React from 'react';
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';

export default function Dashboard({id}) {
    const { selectConversation } = useConversations();

    return (
        <div className="d-flex"style={{ height: '100vh' }}>
            <Sidebar id={id} />
            {selectConversation && <OpenConversation />}
        </div>
    )
}
