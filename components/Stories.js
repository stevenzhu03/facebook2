import StoryCard from "./StoryCard";

const stories = [
    {
        name: "Kevin Durant",
        src: "https://tinyurl.com/wsb7c2ae",
        profile: "https://tinyurl.com/32yn2f8n"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Andy Jassy",
        src: "https://tinyurl.com/9ka7cb4f",
        profile: "https://tinyurl.com/4v2vb75d"
    },
    {
        name: "Mark Zukerburg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    }
]

const Stories = () => {
    return(
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story, index) => (
                <StoryCard key={index} name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories;