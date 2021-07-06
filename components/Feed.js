import Stories from "./Stories";

const Feed = () => {
    return(
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
            <div className="mx-auto max-w-md md:max-w-l lg:max-w-2xl">
                {/* Stories */}
                <Stories />
                {/* InputBox */}
                {/* Post */}
            </div>
        </div>
    )
}

export default Feed;