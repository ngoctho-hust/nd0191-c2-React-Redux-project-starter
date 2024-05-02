const { _saveQuestion, _saveQuestionAnswer } = require("./_DATA");

describe("_saveQuestion", () => {
  it("should return saved question and all expected fields are correct", async () => {
    const optionOneText = "Learn react";
    const optionTwoText = "Learn react-redux";
    const author = "sarahedo";
    const response = await _saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    });

    expect(response).toBeTruthy();
    expect(response.author).toEqual(author);
    expect(response.optionOne.text).toEqual(optionOneText);
    expect(response.optionTwo.text).toEqual(optionTwoText);
  });

  it("should return an error if incorrect data is passed", async () => {
    const optionOneText = undefined;
    const optionTwoText = "Learn react-redux";
    const author = "sarahedo";

    await expect(
      _saveQuestion({
        optionOneText,
        optionTwoText,
        author,
      })
    ).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("should return true when correctly formatted data is passed", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "am8ehyc8byjqgar0jgpub9",
      answer: "optionOne",
    });

    expect(response).toBeTruthy();
  });

  it("should return an error if incorrect data is passed", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: undefined,
      answer: "optionOne",
    }).catch((e) => e);

    expect(response).toBe("Please provide authedUser, qid, and answer");
  });
});
