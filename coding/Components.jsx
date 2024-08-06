// 1. Display Items from an Array

javascript

const DisplayItemsFromList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
// 2. Counter Component

javascript

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
// 3. Data Fetching Component

javascript

const DataFetchingComponent = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData));
  }, []);
  return (
    <>
      <h1>{data.quote}</h1>
      <p>{data.author}</p>
    </>
  );
};
// 4. Form Component

javascript

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <br />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
// 5. Paginated List Component

javascript

const PaginatedList = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div>
      <h1>Paginated List</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  );
};
// 6. Navigation Bar Component

javascript

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
// 7. Counter with Hooks Component

javascript


const CounterWithHooks = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
// 8. Bar Chart Component

javascript

const BarChart = () => {
  const data = [10, 20, 30, 40, 50];
  return (
    <div>
      <h1>Bar Chart</h1>
      {data.map((item, index) => (
        <div key={index}>
          <span style={{ width: `${item}px` }} />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

// 10. Write a React component that uses React Context for state management.
import { useContext, createContext } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);

// 11.  Implement a React component that displays a list of items with infinite scrolling.
import InfiniteScroll from "react-infinite-scroll-component";
const fetchItems = async (page) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Array.from(
    { length: 10 },
    (_, index) => `Item ${page * 10 + index + 1}`
  );
};

export const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const loadMoreItems = async () => {
    const newItems = await fetchItems(page);
    setItems((prevItems) => [...prevItems, ...newItems]);
    if (newItems.length === 0) setHasMore(false);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    loadMoreItems();
  }, []);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMoreItems}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more items</p>}
    >
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </InfiniteScroll>
  );
};

// 12. Create a React component that uses React Suspense for lazy loading.
import { Suspense, lazy } from "react";
const HeavyComponent = lazy(() => import("./HeavyComponent"));

export const LazyLoadingComponent = () => {
  return (
    <div>
      <h1>React Suspense Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};

// 13. Write a React component that handles errors and exceptions.
export const useErrorHandler = () => {
  const [error, setError] = useState(null);

  const handleError = (error) => {
    console.error("Error caught by useErrorHandler:", error);
    setError(error);
  };

  const clearError = () => setError(null);

  return { error, handleError, clearError };
};

// 14. Implement a React component that displays a list of items with filtering and sorting.
import { useMemo } from "react";
export const ItemList = () => {
  const [items] = useState([
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Banana", category: "Fruit" },
    { id: 3, name: "Carrot", category: "Vegetable" },
    { id: 4, name: "Broccoli", category: "Vegetable" },
    { id: 5, name: "Chicken", category: "Meat" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name_asc");

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  const sortedItems = useMemo(() => {
    const compare = (a, b) => {
      if (sortOption === "name_asc") return a.name.localeCompare(b.name);
      if (sortOption === "name_desc") return b.name.localeCompare(a.name);
      return 0;
    };

    return [...filteredItems].sort(compare);
  }, [filteredItems, sortOption]);

  return (
    <div>
      <h1>Item List</h1>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
      </select>

      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

// 15. Create a React component that uses React Memo for performance optimization.
export const ExpensiveComponent = React.memo(({ count }) => {
  console.log("ExpensiveComponent rendered");
  const result = Array.from({ length: 1000000 }, (_, i) => i * count).reduce(
    (a, b) => a + b,
    0
  );

  return (
    <div>
      <h2>Expensive Component</h2>
      <p>Count: {count}</p>
      <p>Result: {result}</p>
    </div>
  );
});

// 16. Write a React component that implements a carousel.
import "./Carousel.css";
export const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevItem}>
        &#9664;
      </button>
      <div className="carousel-item">
        <img src={items[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="carousel-button next" onClick={nextItem}>
        &#9654;
      </button>
    </div>
  );
};

// 17. Implement a React component that displays a list of items with drag-and-drop functionality.
//   Install react-dnd and react-dnd-html5-backend
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const DragItem = ({ item, index, moveItem }) => {
  const [, ref] = useDrag({
    type: "ITEM",
    item: { index },
  });

  return (
    <div
      ref={ref}
      style={{
        padding: "8px",
        margin: "4px",
        backgroundColor: "lightgray",
        borderRadius: "4px",
        cursor: "move",
      }}
    >
      {item}
    </div>
  );
};
export const DragNDrop = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);

  const [, drop] = useDrop({
    accept: "ITEM",
    hover: (draggedItem) => {
      if (draggedItem.index === undefined) return;
      const newIndex = items.indexOf(draggedItem.item);
      const updatedItems = [...items];
      const [movedItem] = updatedItems.splice(draggedItem.index, 1);
      updatedItems.splice(newIndex, 0, movedItem);
      setItems(updatedItems);
    },
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ padding: "20px" }}>
        <h1>Drag-and-Drop List</h1>
        <div
          ref={drop}
          style={{
            width: "300px",
            minHeight: "400px",
            border: "2px solid #ccc",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          {items.map((item, index) => (
            <DragItem
              key={index}
              item={item}
              index={index}
              moveItem={(newIndex) => {
                const updatedItems = [...items];
                const [movedItem] = updatedItems.splice(index, 1);
                updatedItems.splice(newIndex, 0, movedItem);
                setItems(updatedItems);
              }}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

// 18. Create a React component that uses React Ref for DOM manipulation.
import { useRef } from "react";
export const DOMusingRef = () => {
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const scrollToElement = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <h1>React Ref Example</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
      />
      <button onClick={focusInput}>Focus Input</button>

      <div
        style={{ height: "150px", margin: "20px 0", border: "1px solid black" }}
      >
        <p>Scroll down to see the element below.</p>
      </div>

      <div
        ref={scrollRef}
        style={{ height: "200px", backgroundColor: "#f0f0f0" }}
      >
        <h2>Scroll to This Element</h2>
      </div>

      <button onClick={scrollToElement}>Scroll to Element</button>
    </div>
  );
};

// 19. Write a React component that implements a tooltip.
const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && <div className="tooltip-content">{text}</div>}
    </div>
  );
};

// 20. Implement a React component that displays a list of items with virtualization.
// Install react-window
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => <div style={style}>Item {index + 1}</div>;

export const VirtualizedList = ({ itemCount }) => {
  return (
    <List height={500} itemCount={itemCount} itemSize={35} width={300}>
      {Row}
    </List>
  );
};
