import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Lấy ra phần tử trong DOM
      const element = document.querySelector(location.hash);

      // Cuộn đến phần tử đó
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <div id="rikkei-academy">
        <h2>Rikkei Academy</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        explicabo quidem distinctio officiis aut nesciunt vero laboriosam dolore
        corporis nihil suscipit minus, eius quas placeat corrupti sed. Dolores,
        accusantium aspernatur. In cum incidunt laborum? Architecto atque
        recusandae vel obcaecati at quis suscipit aut iste, amet labore, tempora
        facilis natus saepe animi sunt minus. Nam labore doloremque esse, sequi
        necessitatibus dicta. Fugiat ratione ab officiis ut beatae suscipit sunt
        voluptatibus, neque obcaecati fugit deleniti voluptas? Voluptas corporis
        itaque eius minima, velit fugiat! Repudiandae numquam sint libero
        nesciunt repellat veritatis at aspernatur. Distinctio eum similique est
        eaque molestiae ducimus aliquid voluptate, libero aperiam aliquam dolor.
        Consectetur quibusdam voluptatem soluta dignissimos quis voluptate at,
        natus, sed ex architecto autem nesciunt ad similique excepturi.
        Voluptates facere, debitis sequi nostrum laborum, atque recusandae
        libero sit veniam repellat eligendi autem a ex ullam repellendus
        doloribus temporibus perferendis deleniti neque tenetur quasi? Accusamus
        possimus fugit temporibus sunt! Temporibus dolor blanditiis facilis in
        vel impedit? Error cumque vero magni totam eligendi beatae, deleniti
        veniam voluptate architecto accusamus dignissimos tenetur nulla possimus
        qui odio nobis recusandae numquam dolore iure. Deleniti ipsam tempore
        nulla id qui, explicabo quae dolorum voluptates inventore, assumenda
        saepe adipisci, hic perspiciatis ducimus debitis natus quam omnis.
        Fugiat, illum corrupti explicabo rerum ipsam dolorem eum earum?
        Voluptates tempora repellat praesentium delectus perferendis illum
        consequatur ipsum rerum non provident. Labore, laudantium nostrum
        repellat beatae, itaque sint aperiam sed aliquid cupiditate dolor
        accusantium similique vel eius ratione reiciendis. Beatae eveniet
        tempore consectetur numquam omnis, velit maiores cupiditate est soluta.
        Cumque quos et ea autem provident, reprehenderit praesentium doloribus.
        Ipsum facilis quas reprehenderit suscipit commodi distinctio aspernatur
        nesciunt reiciendis! Ipsam ea saepe quas ullam ut. Veniam minus, esse
        dolores blanditiis cum fugiat ullam, iste quod aperiam sint inventore
        magnam magni! Dolor soluta veniam quaerat error consequatur voluptate,
        nulla aperiam!
      </div>

      <div id="rikkei-education">
        <h2>Rikkei Education</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        explicabo quidem distinctio officiis aut nesciunt vero laboriosam dolore
        corporis nihil suscipit minus, eius quas placeat corrupti sed. Dolores,
        accusantium aspernatur. In cum incidunt laborum? Architecto atque
        recusandae vel obcaecati at quis suscipit aut iste, amet labore, tempora
        facilis natus saepe animi sunt minus. Nam labore doloremque esse, sequi
        necessitatibus dicta. Fugiat ratione ab officiis ut beatae suscipit sunt
        voluptatibus, neque obcaecati fugit deleniti voluptas? Voluptas corporis
        itaque eius minima, velit fugiat! Repudiandae numquam sint libero
        nesciunt repellat veritatis at aspernatur. Distinctio eum similique est
        eaque molestiae ducimus aliquid voluptate, libero aperiam aliquam dolor.
        Consectetur quibusdam voluptatem soluta dignissimos quis voluptate at,
        natus, sed ex architecto autem nesciunt ad similique excepturi.
        Voluptates facere, debitis sequi nostrum laborum, atque recusandae
        libero sit veniam repellat eligendi autem a ex ullam repellendus
        doloribus temporibus perferendis deleniti neque tenetur quasi? Accusamus
        possimus fugit temporibus sunt! Temporibus dolor blanditiis facilis in
        vel impedit? Error cumque vero magni totam eligendi beatae, deleniti
        veniam voluptate architecto accusamus dignissimos tenetur nulla possimus
        qui odio nobis recusandae numquam dolore iure. Deleniti ipsam tempore
        nulla id qui, explicabo quae dolorum voluptates inventore, assumenda
        saepe adipisci, hic perspiciatis ducimus debitis natus quam omnis.
        Fugiat, illum corrupti explicabo rerum ipsam dolorem eum earum?
        Voluptates tempora repellat praesentium delectus perferendis illum
        consequatur ipsum rerum non provident. Labore, laudantium nostrum
        repellat beatae, itaque sint aperiam sed aliquid cupiditate dolor
        accusantium similique vel eius ratione reiciendis. Beatae eveniet
        tempore consectetur numquam omnis, velit maiores cupiditate est soluta.
        Cumque quos et ea autem provident, reprehenderit praesentium doloribus.
        Ipsum facilis quas reprehenderit suscipit commodi distinctio aspernatur
        nesciunt reiciendis! Ipsam ea saepe quas ullam ut. Veniam minus, esse
        dolores blanditiis cum fugiat ullam, iste quod aperiam sint inventore
        magnam magni! Dolor soluta veniam quaerat error consequatur voluptate,
        nulla aperiam!
      </div>

      <div id="rikkei-soft">
        <h2>Rikkei Soft</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        explicabo quidem distinctio officiis aut nesciunt vero laboriosam dolore
        corporis nihil suscipit minus, eius quas placeat corrupti sed. Dolores,
        accusantium aspernatur. In cum incidunt laborum? Architecto atque
        recusandae vel obcaecati at quis suscipit aut iste, amet labore, tempora
        facilis natus saepe animi sunt minus. Nam labore doloremque esse, sequi
        necessitatibus dicta. Fugiat ratione ab officiis ut beatae suscipit sunt
        voluptatibus, neque obcaecati fugit deleniti voluptas? Voluptas corporis
        itaque eius minima, velit fugiat! Repudiandae numquam sint libero
        nesciunt repellat veritatis at aspernatur. Distinctio eum similique est
        eaque molestiae ducimus aliquid voluptate, libero aperiam aliquam dolor.
        Consectetur quibusdam voluptatem soluta dignissimos quis voluptate at,
        natus, sed ex architecto autem nesciunt ad similique excepturi.
        Voluptates facere, debitis sequi nostrum laborum, atque recusandae
        libero sit veniam repellat eligendi autem a ex ullam repellendus
        doloribus temporibus perferendis deleniti neque tenetur quasi? Accusamus
        possimus fugit temporibus sunt! Temporibus dolor blanditiis facilis in
        vel impedit? Error cumque vero magni totam eligendi beatae, deleniti
        veniam voluptate architecto accusamus dignissimos tenetur nulla possimus
        qui odio nobis recusandae numquam dolore iure. Deleniti ipsam tempore
        nulla id qui, explicabo quae dolorum voluptates inventore, assumenda
        saepe adipisci, hic perspiciatis ducimus debitis natus quam omnis.
        Fugiat, illum corrupti explicabo rerum ipsam dolorem eum earum?
        Voluptates tempora repellat praesentium delectus perferendis illum
        consequatur ipsum rerum non provident. Labore, laudantium nostrum
        repellat beatae, itaque sint aperiam sed aliquid cupiditate dolor
        accusantium similique vel eius ratione reiciendis. Beatae eveniet
        tempore consectetur numquam omnis, velit maiores cupiditate est soluta.
        Cumque quos et ea autem provident, reprehenderit praesentium doloribus.
        Ipsum facilis quas reprehenderit suscipit commodi distinctio aspernatur
        nesciunt reiciendis! Ipsam ea saepe quas ullam ut. Veniam minus, esse
        dolores blanditiis cum fugiat ullam, iste quod aperiam sint inventore
        magnam magni! Dolor soluta veniam quaerat error consequatur voluptate,
        nulla aperiam!
      </div>
    </div>
  );
}
