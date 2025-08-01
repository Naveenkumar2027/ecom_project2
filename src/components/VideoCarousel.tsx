import { useState } from 'react'

const videos = [
  {
    id: 1,
    title: 'Video 1',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    title: 'Video 2',
    url: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 3,
    title: 'Video 3',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 4,
    title: 'Video 4',
    url: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 5,
    title: 'Video 5',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
]

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    )
  }

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentVideo = videos[currentIndex]

  return (
    <section className="relative py-8 px-4 bg-gray-100 rounded-lg shadow font-josefin">
      <div className="flex items-center justify-center">
        <button
          onClick={prev}
          aria-label="Previous video"
          className="text-2xl font-bold px-3 py-1 rounded-lg hover:bg-gray-300"
          style={{ color: '#5C3A21' }}
        >
          &#9664;
        </button>
        <video
          key={currentVideo.id}
          src={currentVideo.url}
          controls
          className="w-full max-w-3xl h-64 rounded-lg shadow mx-4"
        >
          Your browser does not support the video tag.
        </video>
        <button
          onClick={next}
          aria-label="Next video"
          className="text-2xl font-bold px-3 py-1 rounded-lg hover:bg-gray-300"
          style={{ color: '#5C3A21' }}
        >
          &#9654;
        </button>
      </div>
    </section>
  )
}

export default VideoCarousel
