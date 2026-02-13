import {NextResponse} from "next/server";

const newsData = {
    "news": [
        {
            "id": 1,
            "image": "https://images.unsplash.com/photo-1597172300672-dbcdf33ac44e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Next.js 16 получил улучшенный SSR",
            "content": "Команда Next.js представила обновление версии 16, в котором значительно улучшена работа серверного рендеринга. Новые оптимизации ускоряют загрузку страниц и снижают нагрузку на сервер.",
            "date": "2026-02-10"
        },
        {
            "id": 2,
            "image": "https://images.unsplash.com/photo-1585716517566-568f0646f456?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "React обсуждает новый хук",
            "content": "В сообществе React активно обсуждается добавление нового хука для работы с асинхронными данными. Пока API находится на стадии RFC.",
            "date": "2026-02-09"
        },
        {
            "id": 3,
            "image": "https://images.unsplash.com/photo-1552904577-9de81137b729?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "TypeScript усилил проверки типов",
            "content": "Новая версия TypeScript получила дополнительные проверки типов, которые помогают находить ошибки ещё до запуска приложения.",
            "date": "2026-02-08"
        },
        {
            "id": 4,
            "image": "https://images.unsplash.com/photo-1674944475143-a36ee4a647df?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Веб-разработчики всё чаще выбирают Edge-функции",
            "content": "Edge-функции становятся стандартом для высоконагруженных приложений благодаря минимальной задержке и удобной масштабируемости.",
            "date": "2026-02-07"
        },
        {
            "id": 5,
            "image": "https://images.unsplash.com/photo-1770319125105-e69d454638d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "CSS Container Queries набирают популярность",
            "content": "Container Queries позволяют создавать по-настоящему адаптивные компоненты без зависимости от размера экрана.",
            "date": "2026-02-06"
        },
        {
            "id": 6,
            "image": "https://images.unsplash.com/photo-1537420327992-d6e192287183?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Node.js улучшил работу с потоками",
            "content": "Последнее обновление Node.js принесло оптимизации в работу с потоками данных, что особенно заметно при обработке больших файлов.",
            "date": "2026-02-05"
        },
        {
            "id": 7,
            "image": "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Frontend-рынок смещается в сторону fullstack",
            "content": "Компании всё чаще ищут frontend-разработчиков с базовыми знаниями backend и DevOps-инструментов.",
            "date": "2026-02-04"
        },
        {
            "id": 8,
            "image": "https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "WebAssembly используют не только для игр",
            "content": "WebAssembly всё чаще применяется в аналитике, графике и высокопроизводительных веб-приложениях.",
            "date": "2026-02-03"
        },
        {
            "id": 9,
            "image": "https://images.unsplash.com/photo-1557409518-691ebcd96038?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "AI-инструменты ускоряют разработку",
            "content": "Разработчики всё активнее используют AI-помощников для написания кода, рефакторинга и поиска ошибок.",
            "date": "2026-02-02"
        },
        {
            "id": 10,
            "image": "https://plus.unsplash.com/premium_photo-1661963210464-73560a246e06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title": "Тренд на минимализм в UI усиливается",
            "content": "Простые интерфейсы, крупная типографика и отказ от лишних элементов становятся стандартом современного веб-дизайна.",
            "date": "2026-02-01"
        }
    ]
};

export function getNewsData() {
    return newsData;
}

export async function GET() {
    return NextResponse.json(newsData);
}