import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoStack = ({ images }) => {
  const [cards, setCards] = useState(images); // Array of { id, src, alt }
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleDragEnd = (event, info) => {
    // If dragged far enough to the left or right
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100) {
      setCards((prev) => {
        const newCards = [...prev];
        const topCard = newCards.pop();
        newCards.unshift(topCard);
        return newCards;
      });
    }
  };

  return (
    <div className="relative w-full aspect-[4/5] max-w-[350px] mx-auto perspective-1000">
      <div className="relative w-full h-full">
        {cards.map((card, index) => {
          const isTop = index === cards.length - 1;
          const isBottom = index === 0;
          
          return (
            <motion.div
              key={card.id}
              style={{
                zIndex: index,
                position: 'absolute',
                width: '100%',
                height: '100%',
                cursor: isTop ? 'grab' : 'default',
              }}
              animate={{ 
                scale: isTop ? 1 : 1,
                x: isTop ? 0 : 0,
                // y: isTop ? 0 : (cards.length - 8 - index) * 10,
                // rotate: isTop ? 0 : (index % 2 === 0 ? 3 : -3) * (cards.length - 1 - index),
                y: isTop ? 0 : -14,
                rotate: isTop ? 0 : 8,
                opacity: 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag={isTop}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.7}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 1.05, zIndex: 100 }}
              className="rounded-3xl border border-white/10 overflow-hidden bg-bg-dark shadow-2xl"
            >
              <img 
                src={card.src} 
                alt={card.alt} 
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] mb-1">{card.label}</p>
                <h4 className="text-white font-bold text-lg">Joe Aqilla Vandyta</h4>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Decorative indicator */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3 items-center">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Swipe to Switch</span>
        <div className="flex gap-1.5">
          {cards.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ${i === cards.length - 1 ? 'bg-brand-primary w-6' : 'bg-white/10 w-1.5'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoStack;
