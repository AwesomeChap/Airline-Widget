export default function(origin, destination, randomNo) {
  const airlines = [
    "Aviana",
    "Swoka",
    "Dalta",
    "Serene",
    "Ojio",
    "Aeris",
    "Rapsus"
  ];

  const airline = airlines[Math.floor(randomNo * 7)];
  const duration = 10000000 + Math.floor(randomNo * 1500000);
  const price = 1000 + Math.floor(randomNo * 1000);
  const d = new Date();
  const time1 = d.getTime() + Math.floor(randomNo * 12345678);
  const time2 = time1 + duration;

  const ts1 = new Date(time1);
  const timeA = ts1.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit"
  });
  const dateA = ts1.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  const ts2 = new Date(time2);
  const timeB = ts2.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit"
  });
  const dateB = ts2.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  return {
    origin,
    destination,
    airline,
    price,
    timeA,
    dateA,
    timeB,
    dateB
  };
}
