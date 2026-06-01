import FacebookLogo from'/images/icon-facebook.svg'
import TwitterLogo from'/images/icon-twitter.svg'
import InstagramLogo from'/images/icon-instagram.svg'
import YoutubeLogo from'/images/icon-youtube.svg'
import Up from '/images/icon-up.svg'
import Down from '/images/icon-down.svg'
export default function Overview(){
  const overView =[{
    id:1,
    type: 'Page Views',
    logo:{src:FacebookLogo},
    number: '87',
    percentage: '3%',
    upOrDown:{src:Up}
  },{
    id:2,
    type: 'Likes',
    logo:{src:FacebookLogo},
    number: '52',
    percentage: '2%',
    upOrDown:{src:Down}
  },{
    id:3,
    type: 'Likes',
    logo:{src:InstagramLogo},
    number: '5462',
    percentage: '2257%',
    upOrDown:{src:Up}
  },{
    id:4,
    type: 'Profile Views',
    logo:{src:InstagramLogo},
    number: '52k',
    percentage: '1375%',
    upOrDown:{src:Up}
  },{
    id:5,
    type:'Retweets',
    logo:{src:TwitterLogo},
    number:'117',
    percentage:'303%',
    upOrDown:{src:Up}
  },{
    id:6,
    type:'Likes',
    logo:{src:TwitterLogo},
    number:'507',
    percentage:'553%',
    upOrDown:{src:Up}
  },{
    id:7,
    type:'Likes',
    logo:{src:YoutubeLogo},
    number:'107',
    percentage:'19%',
    upOrDown:{src:Down}
  },{
    id:8,
    type:'Total Views',
    logo:{src:YoutubeLogo},
    number:'1407',
    percentage:'12%',
    upOrDown:{src:Down}
  }]
  return(
    <div>
      <h1 className='text-2xl font-bold text-gray-800 dark:text-white mx-20 mt-10'>Overview - Today</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mx-4 md:mx-20  dark:bg-navy-900 rounded-md ">
      
      {overView.map(overview=>(
        <div className='grid gap-9 bg-navy-50 dark:bg-navy-950 rounded-md p-4 dark:text-white hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700' key={overview.id}>
          <div className='flex justify-between items-center'>
            <p className='dark:text-gray-400'>{overview.type}</p>
            <img src={overview.logo.src} alt={`${overview.type} logo`} />
          </div>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-bold text-gray-800 dark:text-white'>{overview.number}</h1>
            <div className={`flex items-center gap-1 text-sm font-bold  ${overview.upOrDown.src === Up ? 'text-green-500' : 'text-red-500'}`}>
              <img src={overview.upOrDown.src} alt={overview.upOrDown.src === Up ? 'Up' : 'Down'} />
              <p>{overview.percentage}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}