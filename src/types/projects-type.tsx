export type ProjectType = {
  id: string;
  name: string;
  url: string;
  primary_text: string;
  secondary_text: string;
  end_date: string;
  is_active: boolean;
  is_ended: boolean;
  is_soon: boolean;
};

export const emptyProject = {
  id: "",
  name: "",
  url: "",
  primary_text: "",
  secondary_text: "",
  end_date: "",
  is_active: false,
  is_ended: false,
  is_soon: false,
};
