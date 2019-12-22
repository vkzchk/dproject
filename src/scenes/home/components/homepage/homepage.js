import React from 'react'
import https from 'https'
import styles from './homepage.module.css';

const Homepage = () => {

  const planetId = 3

  const cb = (string) => {
    console.log(string)
  }

  const foo = (planetId, https, cb) => {
    let dataObj

    return new Promise((resolve, reject) => {
      let planets = ''
      https
        .get(`https://swapi.co/api/planets/${planetId}/?format=json`, (res) => {
          res.on('data', (d) => {
            planets += d;
          });
          res.on('end', () => {
            const parseData = JSON.parse(planets.toString());
            resolve(parseData)
          });
        })
        .on('error', (e) => {
          reject(e);
          console.error(e);
        });
    })
      .then(planets => {
        dataObj = planets
        return Promise.all(planets.films.map(filmURL => {
          return new Promise((resolve, reject) => {
            let film = ''
            https
              .get(`${filmURL}?format=json`, (res) => {
                res.on('data', (d) => {
                  film += d;
                });
                res.on('end', () => {
                  const parseData = JSON.parse(film.toString());
                  resolve(parseData)
                });
              })
              .on('error', (e) => {
                reject(e);
                console.error(e);
              });
          })
        }))
      })
      .then(res => ({ ...dataObj, films: res }))
      .then(planet => {
        dataObj = planet
        return Promise.all(planet.films.map(filmItems => {
          return Promise.all(filmItems.species.map(specUrl => {
            return new Promise((resolve, reject) => {
              let spec = ''
              https
                .get(`${specUrl}?format=json`, (res) => {
                  res.on('data', (d) => {
                    spec += d;
                  });
                  res.on('end', () => {
                    const parseData = JSON.parse(spec.toString());
                    resolve(parseData)
                  });
                })
                .on('error', (e) => {
                  reject(e);
                });
            })
          })).then(res => ({ ...filmItems, species: res }))
        })).then(res => res)
      })
      .then(res => ({ ...dataObj, films: res }))
      .then(data => cb(data))
      .catch(e => console.log(e))
  }

  foo(planetId, https, cb)

  return (
    <div className={styles.home}>
      <h1>Home page</h1>
    </div>
  )
}

export default Homepage;
