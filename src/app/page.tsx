import {peopleList} from '@/app/data/peopleList'


function Page() {

  const chemist = peopleList.filter(person => person.profession === 'chemist')

  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo</h1>
        <h3>Algum texto</h3>

      {chemist.length > 0 &&
      <>
      <h3>Lista de quimicos</h3>
      <ul>
        {chemist.map(person =>
        <li key={person.id}>{person.name}</li>)}
      </ul>
      </>

      }
    </div>
  );
}

export default Page;
