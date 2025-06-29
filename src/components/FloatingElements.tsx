import { useEffect, useState } from "react";
import { Leaf, Recycle, Heart } from "lucide-react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  icon: React.ReactNode;
  color: string;
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const icons = [
      <Leaf className="w-full h-full" />,
      <Recycle className="w-full h-full" />,
      <Heart className="w-full h-full" />,
    ];

    const colors = ["text-green-400", "text-green-500", "text-green-600"];

    const generateElements = () => {
      const newElements: FloatingElement[] = [];
      for (let i = 0; i < 12; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          speed: Math.random() * 20 + 10,
          icon: icons[Math.floor(Math.random() * icons.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setElements(newElements);
    };

    generateElements();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${element.color} opacity-20 animate-float-slow`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.id * 0.5}s`,
            animationDuration: `${element.speed}s`,
          }}
        >
          {element.icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
