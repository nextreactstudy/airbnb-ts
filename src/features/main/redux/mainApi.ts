import ISearchResList from "@/mocks/camp/campMock";
import appApi from "@/redux/appApi";

const appTaggedApi = appApi.enhanceEndpoints({
    addTagTypes: ["Camp"],
});

const campApi = appTaggedApi.injectEndpoints({
    endpoints: (builder) => ({
        getCampList: builder.query<ISearchResList[], void>({
            query: (args) => ({
                url: `/campSearch`,
                method: "GET",
            }),
            providesTags: () => [{ type: "Camp" }],
        }),
    }),
});

export default campApi;
export const { useGetCampListQuery, useLazyGetCampListQuery } = campApi;
