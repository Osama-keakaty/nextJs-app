import SearchForm from '@/components/searchForm';
import StartupCard from '@/components/startupCard';
export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams)?.query;
  const posts = [
    {
    _createdAt: new Date(),
    view: 21,
    author: {
      _id: 1,
      name:'osama'
    }
    ,
    _id: 1,
    description: 'this is the card description',
    image: 'https://images.unsplash.com/photo-1746058370002-3f4732cf3ce7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Cars',
    title: 'tgee'
  },
    {
    _createdAt: new Date(),
    view: 21,
    author: {
      _id: 2,
      name:'osama'
    }
    ,
    _id: 2,
    description: 'this is the card description',
    image: 'https://images.unsplash.com/photo-1746058370002-3f4732cf3ce7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Cars',
    title: 'tgee'
  },
    {
    _createdAt: new Date(),
    view: 21,
    author: {
      _id: 3,
      name:'osama'
    }
    ,
    _id: 3,
    description: 'this is the card description',
    image: 'https://images.unsplash.com/photo-1746058370002-3f4732cf3ce7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Cars',
    title: 'tgee'
  },

]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, connect with entrepreneurs
        </h1>
        <p>Submit Ideas,Vote on Pitches, And get noticed in virtual</p>
        <SearchForm query={query} />
      </section>
      <section className='section_container'>
        <p className='text-30-bold'>
          {query ? `Results for "${query}"` : 'All startups'}
        </p>
        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? posts.map((post: any, index: number) => (
            
              <StartupCard key={post._id} post={post} />
            
          ))
            :
            <>
              <p className='no-result'>No startups found</p>
            </>
          }
        </ul>

      </section>

    </>
  );
}
