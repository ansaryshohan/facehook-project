

const PostCardBody = ({content,image}) => {
  return (
    <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
        <div className="flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-[10%] object-cover object-center"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${image}`}
            alt="poster"
          />
        </div>
        <p>
          {/* content */}
          {content}
        </p>
      </div>
  )
}

export default PostCardBody