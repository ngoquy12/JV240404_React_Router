import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const cources = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "Reactjs",
  },
  {
    id: 4,
    name: "Java",
  },
];

export default function CourseDetail() {
  //   console.log(window.location.pathname.split("/")[2]); Bỏ
  const { id } = useParams();
  const [courceDetail, setCourceDetail] = useState(null);
  const [isNotFound, setIsNotFound] = useState(false);

  console.log(courceDetail);

  useEffect(() => {
    const findCource = cources.find((cource) => cource.id === parseInt(id));

    if (findCource) {
      setCourceDetail(findCource);
    } else {
      setIsNotFound(true);
    }
  }, []);

  //   ?. Gọi là optional chain (Nếu như object khác null hoặc undefined thì nó mới cho phép truy cập vào key của object đó)

  return (
    <div>
      <h3>Cource detail</h3>

      {isNotFound ? (
        <h3>Không tìm thấy kết quả</h3>
      ) : (
        <div>
          <p>Id: {courceDetail?.id}</p>
          <p>Name: {courceDetail?.name}</p>
        </div>
      )}
    </div>
  );
}
