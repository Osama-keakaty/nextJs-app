import { formatDate } from "@/lib/utils"
import { Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const StartupCard = ({ post }: { post: any }) => {
    const {
        _createdAt,
        view,
        author: { _id: authorId, name },
        image,
        title,
        description,
        _id,
        category
    } = post
    return (
        (<li className='startup-card group'>
            <div className='flex-between'>
                <p className='startup-card_date'>
                    {formatDate(_createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <Eye className="size-6 text-primary-400" />
                    <span >
                        {view}
                    </span>
                </div>
            </div>
            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className="text-16-medium line-clamp-1">{name}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${authorId}`}>
                    {/* TODO here there is an error solve it */}

                    <Image
                        src={'https://placehold.co/46x46'}
                        alt={name} height={46} width={46} className="object-cover rounded-full" />
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className="startup-card_desc">{description}</p>
                <img src={image} alt="place" className="startup-card_img" />
            </Link>
            <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${category.toLowerCase()}`}>
                    <p className="text-16-medium">{category}</p>
                </Link>
                <Button className="startup-card_btn" asChild>
                    <Link href={`/startup/${_id}`}>
                    Details
                    </Link>
                </Button>
            </div>
        </li>)
    );
}

export default StartupCard
