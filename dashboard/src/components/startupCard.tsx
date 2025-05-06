import { formatDate } from "@/lib/utils"

const StartupCard = ({ post }: { post: any }) => {
    return (
        <li className='startup-card group'>
            <div className='flex-between'>
                <p className='startup_card_date'>
                    {formatDate(post?._createdAt)}
                </p>
            </div>
        </li>
    )
}

export default StartupCard
