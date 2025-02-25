import { renderHook, act } from "@testing-library/react-native";
import { useCounter } from "@/hooks/useCounter";

test("Deve iniciar o contador em 0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(0);
});

test("Deve incrementar o contador", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
        result.current.increment();
    });
    expect(result.current.counter).toBe(1);
});
