import { useState } from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import {
  Award,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  GitCompareArrows,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { type Project, projects } from '@/data/portfolioData' // Importing the projects data

const ProjectCarousel = ({ images }: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
      })

      // Initial state
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }
  }, [emblaApi])

  return (
    <div className='space-y-4'>
      <div className='relative'>
        <div ref={emblaRef} className='overflow-hidden rounded-lg'>
          <div className='flex'>
            {images.map((image, index) => (
              <div className='relative flex-[0_0_100%]' key={index}>
                <div className='aspect-video'>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className='h-full w-full'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant='secondary'
          size='icon'
          className={cn(
            'absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 shadow-lg hover:bg-background',
            !canScrollPrev && 'opacity-50 cursor-not-allowed',
          )}
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
        >
          <ChevronLeft className='h-4 w-4' />
        </Button>
        <Button
          variant='secondary'
          size='icon'
          className={cn(
            'absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 shadow-lg hover:bg-background',
            !canScrollNext && 'opacity-50 cursor-not-allowed',
          )}
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
        >
          <ChevronRight className='h-4 w-4' />
        </Button>
      </div>

      {/* Thumbnails */}
      <div className='flex gap-2 overflow-auto pb-2'>
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              'relative flex-0 min-w-[100px] cursor-pointer overflow-hidden rounded-md border-2 transition-all',
              selectedIndex === index
                ? 'border-primary'
                : 'border-transparent opacity-70 hover:opacity-100',
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          >
            <div className='aspect-video w-[100px]'>
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className='h-full w-full object-cover'
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className='mb-8 overflow-hidden'>
      <CardContent className='space-y-6'>
        <ProjectCarousel images={project.images} />

        <div className='space-y-4'>
          <div className='flex flex-col gap-3'>
            {/* {project.summary.map((item, index) => (
          <li key={index}>{item.text}</li>
          ))} */}
            <span className='font-bold text-2xl sm:text-3xl'>
              {project.name} - {project.title}
            </span>
            <p className='text-sm sm:text-base font-bold'>{project.summary}</p>
          </div>
          <div className='flex flex-col gap-2 align-center justify-center'>
            <div className='flex gap-2 align-middle'>
              <div className='flex align-middle gap-2'>
                <Users className='max-w-5' />
                <span>참여인원 : </span>{' '}
              </div>
              <span>{project.info.people}</span>
            </div>
            <div className='flex gap-2'>
              <div className='flex align-middle gap-2'>
                <Calendar className='max-w-5' />
                <span className='text-base'>개발기간 : </span>{' '}
              </div>
              <span>{project.info.period}</span>
            </div>

            {project.info.role ? (
              <div className='flex gap-8'>
                <div className='flex align-middle gap-2'>
                  <GitCompareArrows className='max-w-5' />
                  <span className='text-base whitespace-nowrap'>역할 :</span>
                </div>
                <ul className='list-decimal'>
                  {project.info.role?.map((item, index) => (
                    <li className='text-sm sm:text-lg'>{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}

            <div className='flex flex-col gap-1 sm:flex-row sm:gap-7'>
              <div className='flex align-middle gap-2'>
                <Award className='max-w-5' />
                <span className='text-base whitespace-nowrap'>
                  프로젝트 성과 :{' '}
                </span>
              </div>
              <div>
                <ul className='list-decimal ml-5'>
                  {project.info.result.map((item, index) => (
                    <li className='text-sm sm:text-base'>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <Badge key={tag} variant='secondary'>
                {tag}
              </Badge>
            ))}
          </div>

          <div
            className={`space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-[1000px]' : 'max-h-0'
            }`}
          >
            <div className='rounded-lg bg-muted/50 p-4 space-y-4'>
              <div>
                <h4 className='font-semibold mb-2'>주요기능</h4>
                <ul className='list-disc list-inside space-y-1 text-sm sm:text-muted-foreground'>
                  {project.details.impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>진행 중 문제점</h4>
                <ol className='list-decimal list-inside space-y-1 text-sm sm:text-muted-foreground'>
                  {project.details.challenge.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className='font-semibold mb-2'>해결방법</h4>
                <ol className='list-decimal list-inside space-y-1 text-sm sm:text-muted-foreground'>
                  {project.details.solution.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>

              {project.externalLink && (
                <Button
                  variant='link'
                  className='flex items-center gap-2 text-md'
                  asChild
                >
                  <a
                    href={project.externalLink.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {project.externalLink.title}
                  </a>
                </Button>
              )}
            </div>
          </div>

          <Button
            variant='ghost'
            className='w-full'
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <ChevronUp className='mr-2 h-4 w-4' /> Show Less
              </>
            ) : (
              <>
                <ChevronDown className='mr-2 h-4 w-4' /> See More
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const PortfolioFeed = () => {
  return (
    <section className='relative z-10 min-h-screen bg-background/95 px-4 py-24 backdrop-blur-sm'>
      <div className='mx-auto max-w-3xl'>
        <h2 className='mb-12 text-center text-4xl font-bold tracking-tight'>
          프로젝트 경험
        </h2>

        <div className='space-y-8'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioFeed
