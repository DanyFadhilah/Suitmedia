import API_ENDPOINT from '../globals/api-endpoint';

class ThePageDbSource {
  static async fetchIdeas(pageNumber = 1, pageSize = 100, sort = '-published_at') {
    const params = new URLSearchParams({
      'page[number]': pageNumber,
      'page[size]': pageSize,
      'append[]': 'small_image',
      'append[]': 'medium_image',
      sort,
    });

    const url = `${API_ENDPOINT.IDEAS}?${params.toString()}`;
    const headers = {
      Accept: 'application/json',
    };

    const response = await fetch(url, {
      headers,
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.statusText}`);
    }

    const responseJson = await response.json();
    return responseJson.data;
  }

  static async fetchIdeaDetail(id) {
    const url = `${API_ENDPOINT.IDEAS}/${id}`;
    const headers = {
      Accept: 'application/json',
    };

    const response = await fetch(url, {
      headers,
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.statusText}`);
    }

    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default ThePageDbSource;
