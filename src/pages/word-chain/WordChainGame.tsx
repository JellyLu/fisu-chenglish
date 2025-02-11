import React, { useState } from 'react';
import deepSeekApi from "../../api/deep-seek";

const WordChainGame: React.FC = () => {
  const [inputWord, setInputWord] = useState('');
  const [chain, setChain] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputWord) return;

    setIsLoading(true);
    setError(null);

    try {
      const nextWord = await deepSeekApi.getNextWord(inputWord);
      setChain([...chain, inputWord, nextWord]);
      setInputWord('');
    } catch (err) {
      setError('Failed to fetch the next word. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">English Word Chain Game</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={inputWord}
          onChange={handleInputChange}
          className="border p-2 w-full mb-2"
          placeholder="Enter a word"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <div className="space-y-2">
        {chain.map((word, index) => (
          <div key={index} className="p-2 border rounded">
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordChainGame;