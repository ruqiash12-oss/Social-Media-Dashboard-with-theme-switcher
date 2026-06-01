import FacebookLogo from'/images/icon-facebook.svg'
import TwitterLogo from'/images/icon-twitter.svg'
import InstagramLogo from'/images/icon-instagram.svg'
import YoutubeLogo from'/images/icon-youtube.svg'
import Up from '/images/icon-up.svg'
import Down from '/images/icon-down.svg'
export default function SocialMediaDashboard() {
  const SocialMedia =[{
    id:1,
    border: 'before:bg-blue-500',
    logo:{src:FacebookLogo},
    username:'@nathanf',
    followers:'1987',
    todayFollowers:'12',
    upOrDown:{src:Up}
  },
  {
    id:2,
    border: 'before:bg-green-500',
    logo:{src:TwitterLogo},
    username: '@nathanf',
    followers: '1044',
    todayFollowers: '99',
    upOrDown:{src:Up}
  },
  {
    id:3,
    border: " before:bg-[image:var(--color-gradient-instagram)]",
    logo:{src:InstagramLogo},
    username: '@realnathanf',
    followers: '11k',
    todayFollowers: '1099',
    upOrDown:{src:Up}
  },
  {
    id:4,
    border: 'before:bg-red-500',
    logo:{src:YoutubeLogo},
    username: '@Nathan F',
    followers: '8239',
    todayFollowers: '1044',
    upOrDown:{src:Down}
  }]
  return(
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-10 mx-4 md:mx-20'>
    {SocialMedia.map(media => (
      <div key={media.id} className={`grid bg-navy-50 dark:bg-navy-950 rounded-md p-6 text-center gap-3 cursor-pointer hover:bg-gray-200 hover:scale-105 dark:hover:bg-gray-700 transition-colors duration-300 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:rounded-t-md border-t-0 ${media.border}`}>
        <div className='flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 font-bold'>
          <img src={media.logo.src} alt={`${media.username} logo`} />
          <p>{media.username}</p>
        </div>
        <h1 className='text-6xl mt-4 font-bold text-gray-800 dark:text-white'>
          {media.followers}
        </h1>
        <h3 className='mb-4 text-sm text-gray-500 dark:text-gray-400 tracking-widest lg:tracking-[0.8em]'>
          {media.id === 4 ? 'SUBSCRIBERS' : 'FOLLOWERS'}
        </h3>
        <div className={`flex items-center justify-center gap-1 text-sm font-bold mb-4 ${media.upOrDown.src === Up ? 'text-green-500' : 'text-red-500'}`}>
          <img src={media.upOrDown.src} alt={media.upOrDown.src === Up ? 'Up' : 'Down'} />
          <span>{media.todayFollowers} Today</span>
        </div>
      </div>
    ))}
    </div>
  )
}