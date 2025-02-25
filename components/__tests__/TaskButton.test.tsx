import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TaskButton from "@/components/TaskButton";


test("Deve renderizar o botão com o título correto", () => {
    const { getByText } = render(<TaskButton title="Clique aqui" onPress={() => {}} />);
    expect(getByText("Clique aqui")).toBeTruthy();
});

test("Deve chamar a função onPress quando pressionado", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(<TaskButton title="Clique" onPress={mockPress} />);
    fireEvent.press(getByTestId("button"));
    expect(mockPress).toHaveBeenCalledTimes(1);
});
