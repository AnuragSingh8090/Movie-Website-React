export const API_KEY = "d7842d4e2f0bce6affa5474474495a03";
export const baseUrl = "https://api.themoviedb.org/3";
export const posterUrl = "https://image.tmdb.org/t/p/original";
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzg0MmQ0ZTJmMGJjZTZhZmZhNTQ3NDQ3NDQ5NWEwMyIsIm5iZiI6MTcxOTkyMjAwNi4zNzMsInN1YiI6IjY2ODNlZDU2OWM5OGIzNGY5NjliMjVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FbzFI3W5Av9WBi-ivjBxgATVe4wzfkPhzmlDw3LkBEI'
let page = 1;
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${token}`,
  },
};

export const fetchApi = async (prop) => {
  const url = `${baseUrl}${prop}`;
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return "Error Fetching Data!!";
  }
};

export const popularMovie = {
  title: "Popular Movies",
  url: `${baseUrl}/movie/popular?language=en-US&page=${page}`,
};
export const popularSeries = {
  title: "Popular Series",
  url: `${baseUrl}/tv/popular?language=en-US&page=${page}`,
};
export const topRatedMovie = {
  title: "Top Rated Movies",
  url: `${baseUrl}/movie/top_rated?language=en-US&page=${page}`,
};
export const topRatedSeries = {
  title: "Top Rated Series",
  url: `${baseUrl}/tv/top_rated?language=en-US&page=${page}`,
};

export const onTheAirSeries = {
  title: "On The Air Series",
  url: `${baseUrl}/tv/on_the_air?language=en-US&page=${page}`,
};

export const upcommingMovie = {
  title: "Upcomming Movie",
  url: `${baseUrl}/movie/upcoming?language=en-US&page=${page}`,
};

export const genre = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  Horror: 27,
  Mystery: 9648,
  Romance: 10749,
  ScienceFiction: 878,
  Thriller: 53,
  War: 10752,
  Western: 37,
  Kids: 10762,
};
// functions to use

export const checkMovieType = (movie) => {
  if (movie.type === "tv") {
    return "Series";
  } else if (movie.type === "movie") {
    return "Movie";
  } else if (movie.original_title) {
    return "Movie";
  } else if (movie.original_name) {
    return "Series";
  } else {
    return "Unknown";
  }
};

export const convertRuntime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes}min`;
  }

  return `${hours}hr ${remainingMinutes}min`;
};

export const trailerKey = (props) => {
  const trailer = props.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );
  return trailer;
};

export const extractAllYoutubeVideos = (props) => {
  return props.results
    .filter((video) => video.site === "YouTube" && video.official)
    .slice(0, 6)
    .map((video) => ({
      name: video.name,
      key: video.key,
      site: video.site,
      type: video.type,
      published_at: video.published_at,
    }));
};
export const getTopActingLeads = (castData) => {
  const filteredCast = castData.cast
    .filter(
      (member) =>
        member.known_for_department === "Acting" &&
        member.order >= 0 &&
        member.order <= 30
    )
    .sort((a, b) => a.order - b.order);

  return filteredCast;
};

export const getFilteredImages = (imagesData) => {
  const filteredImages = imagesData.backdrops
    .filter((image) => image.vote_count >= 0 && image.vote_count <= 20)
    .sort((a, b) => a.vote_count - b.vote_count)
    .slice(0, 20)
    .map((image) => image.file_path);

  return filteredImages;
};

export const getSeasonVideos = (videos) => {
  return {
    trailer: videos
      .filter((video) => video.type.toLowerCase() === "trailer")
      .map((video) => video.key),
    allVideos: videos
      .filter((video) => video.type.toLowerCase() !== "trailer")
      .map((video) => video.key),
  };
};
export const getSeasonCast = (cast) => {
  return cast
    .filter((member) => member.order >= 0 && member.order <= 30)
    .map((member) => ({
      original_name: member.original_name,
      profile_path: member.profile_path,
    }));
};

export const getLanguageName = (code) => {
  let languageName;

  switch (code) {
    case "aa":
      languageName = "Afar";
      break;
    case "ab":
      languageName = "Abkhazian";
      break;
    case "af":
      languageName = "Afrikaans";
      break;
    case "am":
      languageName = "Amharic";
      break;
    case "ar":
      languageName = "Arabic";
      break;
    case "as":
      languageName = "Assamese";
      break;
    case "ay":
      languageName = "Aymara";
      break;
    case "az":
      languageName = "Azerbaijani";
      break;
    case "ba":
      languageName = "Bashkir";
      break;
    case "be":
      languageName = "Byelorussian";
      break;
    case "bg":
      languageName = "Bulgarian";
      break;
    case "bh":
      languageName = "Bihari";
      break;
    case "bi":
      languageName = "Bislama";
      break;
    case "bn":
      languageName = "Bengali";
      break;
    case "bo":
      languageName = "Tibetan";
      break;
    case "br":
      languageName = "Breton";
      break;
    case "ca":
      languageName = "Catalan";
      break;
    case "co":
      languageName = "Corsican";
      break;
    case "cs":
      languageName = "Czech";
      break;
    case "cy":
      languageName = "Welsh";
      break;
    case "da":
      languageName = "Danish";
      break;
    case "de":
      languageName = "German";
      break;
    case "dz":
      languageName = "Bhutani";
      break;
    case "el":
      languageName = "Greek";
      break;
    case "en":
      languageName = "English";
      break;
    case "eo":
      languageName = "Esperanto";
      break;
    case "es":
      languageName = "Spanish";
      break;
    case "et":
      languageName = "Estonian";
      break;
    case "eu":
      languageName = "Basque";
      break;
    case "fa":
      languageName = "Persian";
      break;
    case "fi":
      languageName = "Finnish";
      break;
    case "fj":
      languageName = "Fiji";
      break;
    case "fo":
      languageName = "Faroese";
      break;
    case "fr":
      languageName = "French";
      break;
    case "fy":
      languageName = "Frisian";
      break;
    case "ga":
      languageName = "Irish";
      break;
    case "gd":
      languageName = "Scots Gaelic";
      break;
    case "gl":
      languageName = "Galician";
      break;
    case "gn":
      languageName = "Guarani";
      break;
    case "gu":
      languageName = "Gujarati";
      break;
    case "ha":
      languageName = "Hausa";
      break;
    case "hi":
      languageName = "Hindi";
      break;
    case "hr":
      languageName = "Croatian";
      break;
    case "hu":
      languageName = "Hungarian";
      break;
    case "hy":
      languageName = "Armenian";
      break;
    case "ia":
      languageName = "Interlingua";
      break;
    case "id":
      languageName = "Indonesian";
      break;
    case "ie":
      languageName = "Interlingue";
      break;
    case "ik":
      languageName = "Inupiak";
      break;
    case "is":
      languageName = "Icelandic";
      break;
    case "it":
      languageName = "Italian";
      break;
    case "iw":
      languageName = "Hebrew";
      break;
    case "ja":
      languageName = "Japanese";
      break;
    case "ji":
      languageName = "Yiddish";
      break;
    case "jw":
      languageName = "Javanese";
      break;
    case "ka":
      languageName = "Georgian";
      break;
    case "kk":
      languageName = "Kazakh";
      break;
    case "kl":
      languageName = "Greenlandic";
      break;
    case "km":
      languageName = "Cambodian";
      break;
    case "kn":
      languageName = "Kannada";
      break;
    case "ko":
      languageName = "Korean";
      break;
    case "ks":
      languageName = "Kashmiri";
      break;
    case "ku":
      languageName = "Kurdish";
      break;
    case "ky":
      languageName = "Kirghiz";
      break;
    case "la":
      languageName = "Latin";
      break;
    case "ln":
      languageName = "Lingala";
      break;
    case "lo":
      languageName = "Laothian";
      break;
    case "lt":
      languageName = "Lithuanian";
      break;
    case "lv":
      languageName = "Latvian";
      break;
    case "mg":
      languageName = "Malagasy";
      break;
    case "mi":
      languageName = "Maori";
      break;
    case "mk":
      languageName = "Macedonian";
      break;
    case "ml":
      languageName = "Malayalam";
      break;
    case "mn":
      languageName = "Mongolian";
      break;
    case "mo":
      languageName = "Moldavian";
      break;
    case "mr":
      languageName = "Marathi";
      break;
    case "ms":
      languageName = "Malay";
      break;
    case "mt":
      languageName = "Maltese";
      break;
    case "my":
      languageName = "Burmese";
      break;
    case "na":
      languageName = "Nauru";
      break;
    case "ne":
      languageName = "Nepali";
      break;
    case "nl":
      languageName = "Dutch";
      break;
    case "no":
      languageName = "Norwegian";
      break;
    case "oc":
      languageName = "Occitan";
      break;
    case "om":
      languageName = "Oromo";
      break;
    case "or":
      languageName = "Oriya";
      break;
    case "pa":
      languageName = "Punjabi";
      break;
    case "pl":
      languageName = "Polish";
      break;
    case "ps":
      languageName = "Pashto";
      break;
    case "pt":
      languageName = "Portuguese";
      break;
    case "qu":
      languageName = "Quechua";
      break;
    case "rm":
      languageName = "Rhaeto-Romance";
      break;
    case "rn":
      languageName = "Kirundi";
      break;
    case "ro":
      languageName = "Romanian";
      break;
    case "ru":
      languageName = "Russian";
      break;
    case "rw":
      languageName = "Kinyarwanda";
      break;
    case "sa":
      languageName = "Sanskrit";
      break;
    case "sd":
      languageName = "Sindhi";
      break;
    case "sg":
      languageName = "Sangho";
      break;
    case "sh":
      languageName = "Serbo-Croatian";
      break;
    case "si":
      languageName = "Singhalese";
      break;
    case "sk":
      languageName = "Slovak";
      break;
    case "sl":
      languageName = "Slovenian";
      break;
    case "sm":
      languageName = "Samoan";
      break;
    case "sn":
      languageName = "Shona";
      break;
    case "so":
      languageName = "Somali";
      break;
    case "sq":
      languageName = "Albanian";
      break;
    case "sr":
      languageName = "Serbian";
      break;
    case "ss":
      languageName = "Siswati";
      break;
    case "st":
      languageName = "Sesotho";
      break;
    case "su":
      languageName = "Sundanese";
      break;
    case "sv":
      languageName = "Swedish";
      break;
    case "sw":
      languageName = "Swahili";
      break;
    case "ta":
      languageName = "Tamil";
      break;
    case "te":
      languageName = "Telugu";
      break;
    case "tg":
      languageName = "Tajik";
      break;
    case "th":
      languageName = "Thai";
      break;
    case "ti":
      languageName = "Tigrinya";
      break;
    case "tk":
      languageName = "Turkmen";
      break;
    case "tl":
      languageName = "Tagalog";
      break;
    case "tn":
      languageName = "Setswana";
      break;
    case "to":
      languageName = "Tonga";
      break;
    case "tr":
      languageName = "Turkish";
      break;
    case "ts":
      languageName = "Tsonga";
      break;
    case "tt":
      languageName = "Tatar";
      break;
    case "tw":
      languageName = "Twi";
      break;
    case "ug":
      languageName = "Uighur";
      break;
    case "uk":
      languageName = "Ukrainian";
      break;
    case "ur":
      languageName = "Urdu";
      break;
    case "uz":
      languageName = "Uzbek";
      break;
    case "vi":
      languageName = "Vietnamese";
      break;
    case "vo":
      languageName = "Volapuk";
      break;
    case "wo":
      languageName = "Wolof";
      break;
    case "xh":
      languageName = "Xhosa";
      break;
    case "yo":
      languageName = "Yoruba";
      break;
    case "za":
      languageName = "Zhuang";
      break;
    case "zh":
      languageName = "Chinese";
      break;
    case "zu":
      languageName = "Zulu";
      break;
    default:
      languageName = "Unknown Language";
  }

  return languageName;
};
