import ItemCard from "./ItemCard";

const products = [
    {
        id: 1,
        title: 'Fitness Tracker Watch',
        price: 'KES 2,500',
        description: 'Monitor workouts, heart rate, and sleep with a sleek fitness tracker.',
        image: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UL480_FMwebp_QL65_.jpg',
    },
    {
        id: 2,
        title: 'Wireless Earbuds',
        price: 'KES 4,200',
        description: 'Enjoy crystal-clear audio and noise isolation on every run.',
        image: 'https://images.unsplash.com/photo-1516707570269-0b11d1fe514e?auto=format&fit=crop&w=400&q=80',
    },
    {
        id: 3,
        title: 'Yoga Mat',
        price: 'KES 1,800',
        description: 'Comfortable, non-slip yoga mat for all your daily stretches.',
        image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1c?auto=format&fit=crop&w=400&q=80',
    },
    {
        id: 4,
        title: 'Dumbbell Set',
        price: 'KES 7,500',
        description: 'Durable dumbbells for strength training at home.',
        image: 'https://images.unsplash.com/photo-1599058917218-7abd881f9d0d?auto=format&fit=crop&w=400&q=80',
    },
    {
        id: 5,
        title: 'Running Shoes',
        price: 'KES 6,800',
        description: 'Lightweight running shoes designed for comfort and speed.',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
    },
    {
        id: 6,
        title: 'Gym Bag',
        price: 'KES 1,400',
        description: 'Stylish and spacious bag to carry your workout gear.',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
    },
    {
        id: 7,
        title: 'Water Bottle',
        price: 'KES 800',
        description: 'Insulated water bottle keeps drinks cold during your workout.',
        image: 'https://images.unsplash.com/photo-1526404421502-020c8a6907f7?auto=format&fit=crop&w=400&q=80',
    },
    {
        id: 8,
        title: 'Resistance Band Set',
        price: 'KES 1,200',
        description: 'Complete resistance band kit for stretching and strength training.',
        image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
    },
];

function MainSection() {
    return (
        <main className="main-section">
            {products.map((product) => (
                <ItemCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                />
            ))}
        </main>
    );
}

export default MainSection;