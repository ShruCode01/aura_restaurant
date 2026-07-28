import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Utensils, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center p-4">
      <div className="text-center max-w-lg space-y-6 glass-card rounded-3xl p-10 sm:p-14 border border-white/10 shadow-2xl">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#C62828] to-[#FF7043] text-white flex items-center justify-center mx-auto shadow-2xl">
          <Utensils className="w-10 h-10" />
        </div>

        <div>
          <span className="text-5xl font-serif font-extrabold text-[#FFC107] block mb-2 font-mono">
            404
          </span>
          <h1 className="text-2xl font-serif font-bold text-white mb-2">
            Page / Course Not Found
          </h1>
          <p className="text-xs text-gray-400 leading-relaxed font-light">
            The page or culinary route you requested has been moved or does not exist on our menu.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return To Home</span>
          </button>

          <button
            onClick={() => navigate('/menu')}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#FFC107]" />
            <span>Browse Full Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};
