import { tmdbApi } from './TMDB';
import fetchMock from 'jest-fetch-mock';
import { configureStore } from '@reduxjs/toolkit';

fetchMock.enableMocks();

describe('TMDB API - getGenres Endpoint', () => {
  let store;

  beforeEach(() => {
    fetchMock.resetMocks();

    store = configureStore({
      reducer: {
        [tmdbApi.reducerPath]: tmdbApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware),
    });
  });

  it('should fetch genres successfully', async () => {
    const mockGenres = {
      genres: [
        { id: 28, name: 'Action' },
        { id: 12, name: 'Adventure' }
      ]
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockGenres));

    const result = await store.dispatch(
      tmdbApi.endpoints.getGenres.initiate()
    );

    expect(result.status).toBe('fulfilled');
    expect(result.data.genres.length).toBe(2);
    expect(result.data.genres[0].name).toBe('Action');
  });
});
