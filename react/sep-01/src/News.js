
import { useEffect, useState } from 'react';
import './News.css';


function News() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        try {

            fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9480aea0168c42e886a4cd472701c4b7')
                .then(res => res.json())
                .then(news => {
                    setData(news);
                    setLoading(false);
                })
            console.log(data)

        } catch (error) {
            console.log(error)

        }

    }, []);


    if (loading) {
        return (
            <h2>Loading . . . </h2>
        );
    }


    return (
        <div className="news-app">

            {
                data.articles.map(article => (

                    <div className="news-card">
                        <img
                            src={article.urlToImage}
                            alt="Trump signs an executive order vowing to defend Qatar in the wake of Israel’s strike - AP News"
                            className="news-image"
                        />
                        <div className="news-content">
                            <div className="news-meta">
                                <span className="source">Associated Press</span>
                                <span className="date">10/2/2025</span>
                            </div>
                            <h2 className="title">
                                {article.title}
                            </h2>
                            <p className="description">
                                U.S. President Donald Trump has signed an executive order pledging to defend Qatar,
                                including using U.S. military action if necessary. The order emphasizes the close
                                cooperation and shared interests between the U.S. and Qatar. It follows Israel's
                                surprise attack…
                            </p>
                            <div className="author">Author</div>
                            <a
                                href="https://apnews.com/article/us-qatar-security-trump-israel-hamas-de391ae9bded58bffb1f5b69777f35cf"
                                target="_blank"
                                rel="noreferrer"
                                className="read-more"
                            >
                                Read Full Article →
                            </a>
                        </div>
                    </div>

                ))
            }



        </div>
    );
}

export default News;