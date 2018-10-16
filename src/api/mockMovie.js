import delay from './delay';

const movies = [
    {
      title: 'Dr. Strangelove',
      director: 'Stanley Kubrick',
      cast: [
        'Peter Sellers',
        'George C. Scott',
        'Slim Pickens'
      ]
    },
    {
      title: 'Eraserhead',
      director: 'David Lynch',
      cast: [
        'Jack Nance',
        'Charlotte Stewart',
        'Jeanne Bates'
      ]
    },
    {
      title: 'Fantastic Mr. Fox',
      director: 'Wes Anderson',
      cast: [
        'George Clooney',
        'Meryl Streep',
        'Bill Murray'
      ]
    }
  ]

  class MovieApi {
    static getAllMovie() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], movies));
            }, delay)
        })
    }
  };

  export default MovieApi