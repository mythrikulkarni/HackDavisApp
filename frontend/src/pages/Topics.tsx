import axios from 'axios';
import React from 'react';

interface ICategoryData {
    id: number,
    cat_name: string
}

interface ICategoryFetch {
    is_success: boolean,
    data: ICategoryData[]
}

function Topics(props: {user_id: number, transitionPage: (screenId: number, userId?: number) => void}) {
    const [categories, setCategories] = React.useState<ICategoryData[]>([]);
    const [selectedCateogires, setSelectedCategories] = React.useState<boolean[]>([]);

    React.useEffect(() => {
        axios.get("http://localhost:8000/api/user_auth", {
            params: {
                section: "category_fetch"
            }
        }).then((response) => {
            let data = response.data as ICategoryFetch;
            setCategories(data.data);
            let selectedCategories: boolean[] = new Array(data.data.length);
            selectedCategories.fill(false);
            setSelectedCategories(selectedCategories);
        })
    }, [])

    const toggleCategory = (index: number) => {
        setSelectedCategories((selectedCategories) => {
            let newSelectedCategories = [...selectedCategories];
            newSelectedCategories[index] = !newSelectedCategories[index];
            return newSelectedCategories;
        })
    }

    const clearForm = () => {
        let defaultValue: boolean[] = new Array(categories.length);
        defaultValue.fill(false);
        setSelectedCategories(defaultValue);
    }

    const submitForm = () => {
        let cat_ids: number[] = [];
        selectedCateogires.map((value, index) => {
            if (value == true) {
                cat_ids.push(categories[index].id);
            }
        });
        let formData = new FormData();
        formData.append("step", "2");
        formData.append("user_id", props.user_id.toString());
        formData.append("cat_ids", JSON.stringify(cat_ids));

        axios.post("http://localhost:8000/api/user_auth/", formData).then((response) => {
            console.log("Success");
            clearForm();
            props.transitionPage(2, undefined);
        })
    }

    return (
            <div
    className="SignUp container"
    style={{ width: 390, height: 212 + (categories.length * 44), position: "relative", background: "#FAF9F6" }}
    >
    <div
        className="WelcomeToBuzzIn"
        style={{
        left: 30,
        top: 60,
        position: "absolute",
        color: "#1A1A1A",
        fontSize: 24,
        fontFamily: "Inter",
        fontWeight: 700,
        wordWrap: "break-word"
        }}
    >
        Welcome to Buzz in
    </div>
    <div
        className="SelectAllTopicsOfInterest"
        style={{
        left: 30,
        top: 94,
        position: "absolute",
        color: "#4E4E4E",
        fontSize: 14,
        fontFamily: "Inter",
        fontWeight: 400,
        wordWrap: "break-word"
        }}
    >
        Select all topics of interest
    </div>
    
    {(() => {
        return categories.map((value, index) => {
            return (
                <>
                    <input
                        id={"1_" + index}
                        key={"1_" + index}
                        type="checkbox"
                        checked={selectedCateogires[index]}
                        onChange={() => {toggleCategory(index);}}
                        className="Frame100"
                        style={{
                            width: 24,
                            height: 24,
                            left: 30,
                            top: 151 + (index * 44),
                            position: "absolute",
                            borderRadius: 5,
                            border: "1px black solid",
                            cursor:"pointer",
                        }}
                    />
                    <div
                        key={"2_" + index}
                        className={value.cat_name}
                        style={{
                            left: 68,
                            top: 152 + (index * 44),
                            position: "absolute",
                            color: "black",
                            fontSize: 18,
                            fontFamily: "Inter",
                            fontWeight: 400,
                            wordWrap: "break-word"
                        }}
                    >
                        {value.cat_name}
                    </div>
                </>
            )
        });
    })()}
    
    
    <div
        className="Frame96"
        style={{
        width: 330,
        height: 47,
        paddingLeft: 87,
        paddingRight: 87,
        paddingTop: 16,
        paddingBottom: 16,
        left: 30,
        top: 162 + (categories.length * 44),
        position: "absolute",
        background: "#E2B11D",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        display: "inline-flex"
        }}
    >
        <div onClick={() => {submitForm();}}
        className="Next"
        style={{
            color: "black",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: 500,
            wordWrap: "break-word"
        }}
        >
        Next
        </div>
    </div>
    </div>
    )
}

export default Topics